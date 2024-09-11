import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function UpdateProfile() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ubah Profile</Text>

        <View style={{ marginTop: 10, marginBottom: 2 }}>
          <Text style={styles.labelInput}>Nama</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Masukan namamu"
            value={name}
            onChangeText={setName}
          />
        </View>
        {/* Tanggal ?? */}
        {/* <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Masukan namamu"
        /> */}
        <View style={{ marginTop: 10, marginBottom: 2 }}>
          <Text style={styles.labelInput}>Alamat</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Masukan Alamat"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 2 }}>
          <Text style={styles.labelInput}>Biodata</Text>
          <TextInput
            style={styles.inputArea}
            keyboardType="default"
            multiline={true}
            numberOfLines={4}
            placeholder="Masukan Bio data kamu"
            value={bio}
            onChangeText={setBio}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9FE',
    flex: 1,
  },
  card: {
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 16,
    width: '80%',
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  labelInput: {
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    borderColor: '#D0D0D0',
  },
  inputArea: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#D0D0D0',
    height: 100,
    textAlignVertical: 'top',
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
