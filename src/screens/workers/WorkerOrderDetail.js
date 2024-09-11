import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { instanceAxios as axios } from '../../config/axiosInstance';
import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { formatCurrencyRupiah } from '../../helpers/currency';
import Swiper from 'react-native-swiper';
import MapView, { Marker } from 'react-native-maps';
export default function WorkerOrderDetail({ navigation, route }) {
  const [job, setJob] = useState({});
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const access_token = await SecureStore.getItemAsync('access_token');
      const [jobRes, profileRes] = await Promise.all([
        await axios({
          url: `/jobs/${route.params.jobId}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }),
        axios({
          method: 'GET',
          url: 'workers/profile',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }),
      ]);
      setJob(jobRes.data);
      setProfile(profileRes.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const applyJob = async () => {
    try {
      setIsLoading(true);
      await axios({
        url: `/workers/jobs/${route.params.jobId}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${await SecureStore.getItemAsync(
            'access_token'
          )}`,
        },
      });
      navigation.navigate('TabScreen');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost().then();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Text>Loading....</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.image}>
                {job?.images && job.images.length > 0 ? (
                  <Swiper
                    showsPagination={true}
                    showsButtons={true}
                  >
                    <MapView
                      style={styles.map}
                      initialRegion={{
                        latitude: job.coordinates.lat,
                        longitude: job.coordinates.lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                      }}
                    >
                      <Marker
                        coordinate={{
                          latitude: job?.coordinates?.lat,
                          longitude: job?.coordinates?.lng,
                        }}
                      />
                    </MapView>
                    {job.images.map((img, index) => (
                      <Image
                        key={index}
                        source={{ uri: img }}
                        style={styles.swiperImage}
                      />
                    ))}
                  </Swiper>
                ) : (
                  <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: job?.coordinates?.lat,
                    longitude: job?.coordinates?.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: job?.coordinates?.lat,
                      longitude: job?.coordinates?.lng,
                    }}
                  />
                </MapView>
                )}
              </View>
              <Text style={styles.headerTitle}>{job?.title}</Text>
              <Text style={styles.headerFee}>
                {formatCurrencyRupiah(job?.fee)}
              </Text>
            </View>
            <View style={styles.detailGroup}>
              <Text style={styles.detailGroupTitle}>Deskripsi</Text>
              <Text style={styles.detailGroupSubtitle}>{job?.description}</Text>
            </View>
            <View style={styles.detailGroup}>
              <Text style={styles.detailGroupTitle}>Alamat</Text>
              <Text style={styles.detailGroupSubtitle}>{job?.address}</Text>
            </View>
            <View style={styles.detailGroup}>
              <Text style={styles.detailGroupTitle}>Catatan Alamat</Text>
              <Text
                style={[
                  styles.detailGroupSubtitle,
                  job?.addressNotes ? {} : styles.emptyText,
                ]}
              >
                {job?.addressNotes || '(Tidak ada)'}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          {job.workerId === profile.userId ? (
            <>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => {
                  navigation.navigate('Chat', { jobId: job._id });
                }}
              >
                <Text style={styles.secondaryText}>Pesan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => {
                  navigation.navigate('WorkerVerificationOrder', { job });
                }}
              >
                <Text style={styles.primaryText}>Selesai</Text>
              </TouchableOpacity>
            </>
          ) : job.workers.some((val) => val.userId === profile.userId) ? (
            <View style={styles.primaryButton}>
              <Text style={styles.primaryText}>
                Kamu sudah melamar pekerjaan ini
              </Text>
            </View>
          ) : (
            <>
              <TouchableOpacity style={styles.primaryButton} onPress={applyJob}>
                <Text style={styles.primaryText}>Melamar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9FE',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    backgroundColor: '#D1D5DB',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1F2937',
  },
  headerFee: {
    fontSize: 18,
    fontWeight: '600',
    color: '#059669',
  },
  detailGroup: {
    marginBottom: 24,
  },
  detailGroupTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#374151',
  },
  detailGroupSubtitle: {
    fontSize: 16,
    color: '#4B5563',
  },
  emptyText: {
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#1D204C',
    borderRadius: 8,
    padding: 12,
    marginLeft: 8,
  },
  primaryText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#05ECAE',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
  },
  secondaryText: {
    color: '#1F2937',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
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
  swiperImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 16
  },
});
