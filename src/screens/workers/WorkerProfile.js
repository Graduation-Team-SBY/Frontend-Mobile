import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { deleteItemAsync, getItemAsync } from 'expo-secure-store';
import { AuthContext } from '../../contexts/auth';
import { useContext, useEffect, useState } from "react"
import { instanceAxios as axios } from '../../config/axiosInstance';
import { age } from '../../helpers/age';
import { formatDateMonth } from '../../helpers/formatDate';
import WorkerReview from '../../components/WorkerReview';
export default function WorkerProfile({ navigation }) {
  const [profile, setProfile] = useState({});
  const { setIsSignedIn } = useContext(AuthContext);
  const handlerLogOut = async () => {
    try {
      await Promise.all([deleteItemAsync("access_token"), deleteItemAsync("role")])
      setIsSignedIn(false)
    } catch (err) {
      console.log(err)
    }
  }
  
  const [testi, setTesti] = useState([]);
  const fetchTestimoni = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/workers/profile/reviews',
        headers: {
          Authorization: `Bearer ${await getItemAsync('access_token')}`,
        },
      });

      setTesti(data);
    } catch (error) {
      console.log(error);
    }
  };

  async function getProfile() {
    try {
      const access_token = await getItemAsync('access_token')
      const { data } = await axios({
        method: 'GET',
        url: 'workers/profile',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setProfile(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProfile();
    fetchTestimoni();
  }, [])
  return (
    <ScrollView style={{ backgroundColor: '#FAF9FE' }}>
      <View style={styles.container}>
        {/* <Text style={{ fontSize: 36, fontWeight: 'bold' }}>My Profile</Text> */}
        <View style={{ gap: 32 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
            <Image
              style={{ width: 95, height: 95, borderRadius: 100 }}
              src={profile.profilePicture}
            />
            <View>
              <Text style={{ fontSize: 24, fontWeight: '600' }}>{profile.name ? profile.name : '(Belum Diisi)'}</Text>
              <Text
                style={{ fontSize: 16, fontWeight: '300', color: '#AFAFAF' }}
              >
                {profile.userData?.email}
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
                onPress={() => navigation.navigate('EditProfile')}
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
                { profile.userData?.role === 'worker' ? 'Yasa' : 'Jalu' }
              </Text>
            </View>
            <View>
              <Text style={styles.profileDataTitle}>Umur</Text>
              <Text style={styles.profileDataText}>{ profile.dateOfBirth ? age(profile.dateOfBirth) : '(Belum Diisi)'}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.profileDataTitle}>Nomor Handphone</Text>
              <Text style={styles.profileDataText}>{ profile.userData?.phoneNumber }</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.profileDataTitle}>Tanggal Lahir</Text>
              <Text style={styles.profileDataText}>{ profile.dateOfBirth ? formatDateMonth(new Date(profile.dateOfBirth)) : '(Belum Diisi)'}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.profileDataTitle}>Alamat</Text>
              <Text style={styles.profileDataText}>
                { profile.address ? profile.address : '(Belum Diisi)' }
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.listReviewCard}>
          <Text style={styles.titleReviews}>
            Baca Ulasan dari Para{' '}
            <Text style={{ color: '#05ECAE' }}>Jalu</Text>
            {' '}untuk {profile.name ? profile.name : 'Yasa'}
          </Text>
          { testi.map((val, i) => {
            return <WorkerReview key={i} review={val}/>
          }) }
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
    gap: 16
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
