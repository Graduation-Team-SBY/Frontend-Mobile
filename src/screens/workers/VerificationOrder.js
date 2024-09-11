import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { formatCurrencyRupiah } from '../../helpers/currency';

export default function VerificationOrder() {
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
          <View style={styles.totalFee}>
            <Text style={{ fontWeight: '700' }}>Jumlah Total</Text>
            <Text>{formatCurrencyRupiah(20000)}</Text>
          </View>
          <View style={styles.description}>
            <Text style={{ fontWeight: '700' }}>Deskripsi:</Text>
            <Text>Halooo</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kirim Verifikasi</Text>
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
