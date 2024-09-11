import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CurrencyDollarIcon } from 'react-native-heroicons/solid';
import { instanceAxios as axios } from '../../config/axiosInstance';
import * as SecureStore from 'expo-secure-store';
import { formatCurrencyRupiah } from '../../helpers/currency';
import NewestJobCard from '../../components/NewestJobCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeWorker({ navigation }) {
  const [profile, setProfile] = useState({ name: 'User' });
  const [wallet, setWallet] = useState({ amount: 0 });
  const [newestJob, setNewestJob] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const fetchProfile = async () => {
    try {
      setIsloading(true);
      let access_token = await SecureStore.getItemAsync('access_token');
      const profileResponse = await axios({
        method: 'GET',
        url: 'workers/profile',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const walletResponse = await axios({
        method: 'GET',
        url: '/profile/wallet',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setProfile(profileResponse.data);
      setWallet(walletResponse.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };
  const fethNewestJob = async () => {
    try {
      let access_token = await SecureStore.getItemAsync('access_token');
      const { data } = await axios({
        method: 'GET',
        url: 'workers/jobs/worker/newest',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setNewestJob(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fethNewestJob();
    fetchProfile();
  }, []);
  return (
    <ScrollView style={{ backgroundColor: '#FAF9FE' }}>
      <View style={styles.container}>
        <View style={styles.ewallet}>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={['rgba(5,236,174,1)', 'rgba(29,32,76,1)']}
            style={styles.backgroundEwallet}
          />
          <View style={styles.ewalletJustify}>
            <Text style={styles.textHeadingEwallet}>My Balance</Text>
            <CurrencyDollarIcon size={32} color={'#FFF'} />
          </View>
          <View>
            <Text style={styles.textUser}>{profile?.name}</Text>
            <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
              {formatCurrencyRupiah(wallet?.amount)}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.titleWelcome}>
            Selamat datang, <Text style={styles.span}>{profile?.name}</Text> !
          </Text>
        </View>
        <View style={styles.quotes}>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>YangTu</Text>
          <Text style={{ color: '#4b5563', fontSize: 14 }}>
            Bekerja yang didasarkan pada pekerjaan sementara, tugas - tugas
            jangka pendek, atau kontrak pekerjaan yang fleksibel
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Pekerjaan Terbaru
          </Text>
          <Pressable onPress={() => navigation.navigate('AllJobs')}>
            <FontAwesome6 name="arrow-right-long" size={16} color="black" />
          </Pressable>
        </View>
        {newestJob.map((val, i) => {
          return <NewestJobCard key={i} job={val} navigation={navigation} />
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
    padding: 28,
    gap: 32,
    marginVertical: 4,
  },
  containerCard: {
    flexDirection: 'row',
    width: '100%',
    gap: 20,
    justifyContent: 'space-between',
  },
  titleWelcome: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1D204C',
  },
  span: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#05ECAE',
  },
  textUser: {
    color: 'white',
    fontSize: 20,
  },
  textHeadingEwallet: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ewallet: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 275,
    padding: 32,
    justifyContent: 'space-around',
  },
  ewalletJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerSwiper: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#007bff',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  backgroundEwallet: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 12,
  },
  quotes: {
    backgroundColor: '#DBEAFE',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    gap: 4,
  },
});
