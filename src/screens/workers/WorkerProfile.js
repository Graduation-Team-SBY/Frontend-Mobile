import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { deleteItemAsync } from 'expo-secure-store';
import { AuthContext } from '../../contexts/auth';
import { useContext } from "react"
export default function WorkerProfile() {
  const { setIsSignedIn } = useContext(AuthContext)
  const handlerLogOut = async () => {
    try {
      await Promise.all([deleteItemAsync("access_token"), deleteItemAsync("role")])
      setIsSignedIn(false)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <ScrollView>
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
              <Text
                style={{ fontSize: 16, fontWeight: '300', color: '#AFAFAF' }}
              >
                aditya@gmail.com
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#09CC9E',
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                    justifyContent: 'center',
                  }}
                >
                  <FontAwesome6 name="edit" size={24} color="#FFF" />
                  <Text
                    style={{ color: '#FFF', fontSize: 16, fontWeight: '600' }}
                  >
                    Edit Profile
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                underlayColor={"#f87171"}
                style={{
                  backgroundColor: 'transparent',
                  padding: 8,
                  borderRadius: 100,
                  borderWidth: 1.5,
                  borderColor: "#f87171"
                }}
                onPress={handlerLogOut}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                    justifyContent: 'center',
                  }}
                >
                  <Feather name="log-out" size={24} color="#f87171" />
                  <Text
                    style={{ color: '#f87171', fontSize: 16, fontWeight: '600' }}
                  >
                    Logout
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

        </View>
        <View style={{ gap: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 64 }}>
            <View>
              <Text style={styles.profileDataTitle}>Status</Text>
              <Text
                style={{ fontSize: 20, fontWeight: '500', color: '#17A34A' }}
              >
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
              <Text style={styles.profileDataText}>0811300111031</Text>
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

        <View style={styles.listReviewCard}>
          <Text style={styles.titleReviews}>
            Baca Ulasan Terpercaya Dari{' '}
            <Text style={{ color: '#05ECAE' }}>Pelanggan</Text> Kami
          </Text>

          <View style={styles.containerReviews}>
            <View style={styles.cardReview}>
              {/* Avatar, name, rating */}
              <View
                style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}
              >
                <Image
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                  src="https://images.unsplash.com/photo-1725590249885-de0796581827?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <View>
                  <Text style={{ fontWeight: '700' }}>Amelia Watsitooya</Text>
                  <Text style={{ fontWeight: '600' }}>
                    <AntDesign name="star" size={16} color="#eab308" /> 4.9
                  </Text>
                </View>
              </View>
              {/* Pesan */}
              <View style={{ marginVertical: 18 }}>
                <Text style={{ fontWeight: '700' }}>Pesan:</Text>
                <Text>Lorem ipsum due mennls skdjfksdf kjjpa skdjkh sd</Text>
              </View>
              {/* Foto */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {/* contoh looping */}
                {[1, 2, 3, 4].map((_, index) => {
                  return (
                    <Image
                      key={index}
                      style={{ width: 50, height: 50, borderRadius: 10 }}
                      src="https://images.unsplash.com/photo-1725590249885-de0796581827?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listReviewCard: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
  titleReviews: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  containerReviews: {
    gap: 20,
  },
  cardReview: {
    backgroundColor: '#FAF9FE',
    padding: 20,
    borderRadius: 20,
  },

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
    fontWeight: '500',
  },
});
