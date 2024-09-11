import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { formatCurrencyRupiah } from '../../helpers/currency';
import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker';
import { useState } from 'react';
import { instanceAxios as axios } from '../../config/axiosInstance';
import { getItemAsync } from 'expo-secure-store';
export default function VerificationOrder({ route, navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [imgResult, setImgResult] = useState([]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.containerPermission}>
        <View style={styles.permissionRequest}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>
            We Need Your Permission To Use Camera
          </Text>
          <TouchableOpacity
            onPress={requestPermission}
            style={styles.permissionButton}
          >
            <Text style={{ textAlign: 'center' }}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async function takePhoto() {
    let result = await launchCameraAsync();

    if (result.canceled) {
      return;
    }

    let localUri = result.assets[0].uri;
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    setImgResult(imgResult.concat({ uri: localUri, name: filename, type }));
  }


  const handleVerificationSubmit = async () => {

    const formData = new FormData();
    for (const val of imgResult) {
      formData.append('image', val);
    }
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `/workers/jobs/${route.params.job._id}/worker`,
        headers: {
          Authorization: `Bearer ${await getItemAsync("access_token")}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });



      navigation.navigate("TabScreen");
    } catch (err) {
      console.log(err);
    } finally {

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <MaterialIcons
            style={{ textAlign: 'center' }}
            name="verified-user"
            size={60}
            color="#1D204C"
          />

          <Text style={styles.headingTextVerification}>Verifikasi Pesanan</Text>
          <Text style={styles.headingTextDescription}>
            Tolong unggah file bukti untuk verifikasi
          </Text>
          <View
            style={{
              borderBottomColor: '#D0D0D0',
              borderBottomWidth: 0.7,
              marginVertical: 20,
            }}
          />
        </View>
        <View>
          <View>
            <View style={{ gap: 8 }}>
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Text style={{ fontWeight: '700' }}>Tambahkan Bukti</Text>
                <Pressable onPress={takePhoto}>
                  <FontAwesome5 name="camera" size={24} color="#1D204C" />
                </Pressable>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
                {imgResult.map((img, i) => {
                  return (
                    <Image
                      key={i}
                      source={img}
                      style={{ resizeMode: 'cover', height: 80, width: 60 }}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          <View style={styles.totalFee}>
            <Text style={{ fontWeight: '700' }}>Jumlah Total</Text>
            <Text>{formatCurrencyRupiah(route.params.job.fee)}</Text>
          </View>
          <View style={styles.description}>
            <Text style={{ fontWeight: '700' }}>Deskripsi:</Text>
            <Text>{route.params.job.description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleVerificationSubmit}>
          <Text style={styles.buttonText}>Kirim Verifikasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPermission: {
    backgroundColor: '#FAF9FE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionRequest: {
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05ECAE',
    padding: 8,
    borderRadius: 4,
  },
  container: {
    backgroundColor: '#FAF9FE',
    flex: 1,
    paddingHorizontal: 28
  },
  card: {
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 16,
  },
  headingTextVerification: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#1D204C',
  },
  headingTextDescription: {
    textAlign: 'center',
  },
  totalFee: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1D204C',
    borderRadius: 50,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
