import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 36, fontWeight: 'bold' }}>My Profile</Text> */}
      <View style={{ gap: 32 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
          <Image
            style={{ width: 95, height: 95, borderRadius: 100 }}
            src="https://images.unsplash.com/photo-1725590249885-de0796581827?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <View>
            <Text style={{ fontSize: 24, fontWeight: '600' }}>Aditya</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', color: '#AFAFAF' }}>
              aditya@gmail.com
            </Text>
          </View>
        </View>
        <View>
          <TouchableHighlight style={{ backgroundColor: '#09CC9E', padding: 8, borderRadius: 100 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
              <FontAwesome6 name="edit" size={24} color="#FFF" />
              <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '600' }}>Edit Profile</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{ gap: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 64 }}>
          <View>
            <Text style={styles.profileDataTitle}>Status</Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#17A34A' }}>
              Jalu
            </Text>
          </View>
          <View>
            <Text style={styles.profileDataTitle}>Umur</Text>
            <Text style={styles.profileDataText}>36</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.profileDataTitle}>Nomor Handphone</Text>
            <Text style={styles.profileDataText}>
              0811300111031
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.profileDataTitle}>Date of Birth</Text>
            <Text style={styles.profileDataText}>27-11-2002</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.profileDataTitle}>Alamat</Text>
            <Text style={styles.profileDataText}>
              Jl. jalan coba aja dulu
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    backgroundColor: '#FAF9FE',
    paddingVertical: 32,
    gap: 64,
  },
  profileDataTitle: {
    fontSize: 16,
    color: '#AFAFAF',
    fontWeight: '300',
  },
  profileDataText: {
    fontSize: 20,
    fontWeight: '500'
  }
});
