import { getItemAsync } from 'expo-secure-store';
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { instanceAxios as axios } from '../../config/axiosInstance';
import NewestJobCard from '../../components/NewestJobCard';
export default function AllJobs({ navigation }) {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      let access_token = await getItemAsync('access_token');
      const { data } = await axios({
        method: 'GET',
        url: 'workers/jobs/worker',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setJobs(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <ScrollView style={{ backgroundColor: '#FAF9FE' }}>
        <View style={styles.container}>
          {jobs.map((val, i) => <NewestJobCard key={i} job={val} navigation={navigation} />)}
        </View>
      </ScrollView>
    </>
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
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#05ECAE',
    padding: 6,
    borderRadius: 7,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    gap: 20,
  },
  card: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
