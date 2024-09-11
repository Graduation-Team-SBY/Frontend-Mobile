import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { instanceAxios as axios } from "../../config/axiosInstance";
import { useState, useEffect } from "react"
import * as SecureStore from "expo-secure-store"
import { formatCurrencyRupiah } from "../../helpers/currency";
import Swiper from "react-native-swiper";
export default function WorkerOrderDetail({ navigation, route }) {
  const [job, setJob] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const fetchPost = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios({
        url: `/jobs/${route.params.jobId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${await SecureStore.getItemAsync("access_token")}`
        }
      })
      // console.log(data)
      setJob(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    fetchPost().then()
  }, [])

  if (isLoading) {
    return (
      <SafeAreaProvider><SafeAreaView style={styles.safeArea}><Text>Loading....</Text></SafeAreaView></SafeAreaProvider>)
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
                    autoplay
                    autoplayTimeout={3}
                    loop={true}
                    showsPagination={true}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                  >
                    {job.images.map((img, index) => (
                      <Image
                        key={index}
                        source={{ uri: img }}
                        style={styles.swiperImage}
                      />
                    ))}
                  </Swiper>
                ) : (
                  <View style={styles.placeholderImage} />
                )}

              </View>
              <Text style={styles.headerTitle}>{job?.title}</Text>
              <Text style={styles.headerFee}>{formatCurrencyRupiah(job?.fee)}</Text>
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
              <Text style={[styles.detailGroupSubtitle, job?.addressNotes ? {} : styles.emptyText]}>
                {job?.addressNotes || '(Tidak ada)'}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => { }}>
            <Text style={styles.secondaryText}>Pesan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton} onPress={() => { navigation.pop() }}>
            <Text style={styles.primaryText}>Selesai</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF9FE",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    backgroundColor: "#D1D5DB",
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1F2937",
  },
  headerFee: {
    fontSize: 18,
    fontWeight: "600",
    color: "#059669",
  },
  detailGroup: {
    marginBottom: 24,
  },
  detailGroupTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#374151",
  },
  detailGroupSubtitle: {
    fontSize: 16,
    color: "#4B5563",
  },
  emptyText: {
    color: "#9CA3AF",
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#1D204C",
    borderRadius: 8,
    padding: 12,
    marginLeft: 8,
  },
  primaryText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#05ECAE",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
  },
  secondaryText: {
    color: "#1F2937",
    textAlign: "center",
    fontWeight: "600",
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
  }
});