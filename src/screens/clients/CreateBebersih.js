import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Button,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { instanceAxios as axios } from '../../config/axiosInstance';
import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useCameraPermissions } from 'expo-camera';
import { getItemAsync } from 'expo-secure-store';

export default function CreateBebersih({ navigation }) {
  const [fee, setFee] = useState(0);
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [addressNotes, setAddressNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [imgResult, setImgResult] = useState([]);

  async function takePhoto() {
    let result = await ImagePicker.launchCameraAsync();

    if (result.canceled) {
      return;
    }

    let localUri = result.assets[0].uri;
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    console.log(type, '<<< type');
    console.log(filename, '<<< filename');
    console.log(localUri, '<<< localUri');

    setImgResult(imgResult.concat({ uri: localUri, name: filename, type }));
  }



  const createJob = async () => {
    setIsLoading(true);
    try {
      const token = await getItemAsync('access_token');
      const formData = new FormData();
      const coordinates = {
        lat: -6.2,
        lng: 106.816666,
      };
      formData.append('title', 'testing');
      formData.append('fee', fee);
      formData.append('coordinates', JSON.stringify(coordinates));
      formData.append('description', description);
      formData.append('address', address);
      formData.append('addressNotes', addressNotes);
      for (const val of imgResult) {
        formData.append('image', val);
      }
      await axios({
        method: 'POST',
        url: '/clients/jobs/bersih',
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    } finally {
      setIsLoading(true);
      navigation.navigate('HomeClient');
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    );
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>
              Let's start with your first job post.
            </Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Fee</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setFee}
                  value={fee}
                  placeholder={'Enter the fee'}
                  placeholderTextColor={'#9ca3af'}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setDescription}
                  value={description}
                  placeholder={'Type here your job description'}
                  placeholderTextColor={'#9ca3af'}
                  multiline
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAddress}
                  value={address}
                  placeholder={'Type here your address'}
                  placeholderTextColor={'#9ca3af'}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Address Notes</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAddressNotes}
                  value={addressNotes}
                  placeholder={'Type here your address notes'}
                  placeholderTextColor={'#9ca3af'}
                />
              </View>
              <TouchableHighlight
                style={styles.button}
                onPress={createJob}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? 'Creating...' : 'Buat Orderan'}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={takePhoto}>
                <Text style={styles.buttonText}>Add Photo</Text>
              </TouchableHighlight>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D204C',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#1D204C',
    fontWeight: '600',
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#9ca3af',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#1D204C',
    height: 50,
    width: '100%',
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
