import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { formatDateMonth } from '../helpers/formatDate';
import { formatCurrencyRupiah } from '../helpers/currency';

export default function NewestJobCard({ job, navigation }) {
  return (
    <TouchableHighlight style={styles.card} underlayColor={'#DBEAFE'} onPress={() => navigation.navigate("WorkerOrderDetail", { title: job.title, jobId: job._id })}>
      <>
        <View style={styles.heading}>
          <View style={{ justifyContent: 'center', flex: 2 }}>
            <Text style={styles.titleCard} numberOfLines={1}>
              {job.title}
            </Text>
            <Text style={styles.dateCard}>
              {formatDateMonth(new Date(job.createdAt))}
            </Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
          >
            <View style={styles.tag}>
              <Text>{job.category.name}</Text>
            </View>
          </View>
        </View>
        <Text style={{ fontWeight: '600' }}>
          Deskripsi: <Text style={{ fontWeight: '400' }}>{job.description}</Text>
        </Text>
        <Text style={{ fontWeight: '600' }}>
          Alamat: <Text style={{ fontWeight: '400' }}>{job.address}</Text>
        </Text>
        <View style={styles.footerCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              flex: 1,
            }}
          >
            <Image
              src={job.client.profilePicture}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                objectFit: 'cover',
              }}
            />
            <Text style={{ fontSize: 14, fontWeight: '600' }} numberOfLines={1}>
              {job.client.name}
            </Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}
          >
            <Text>{formatCurrencyRupiah(job.fee)}</Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  titleCard: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateCard: {
    fontSize: 12,
    color: '#4b5563',
  },
  tag: {
    backgroundColor: '#05ECAE',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    gap: 12,
  },
  footerCard: {
    borderTopWidth: 0.2,
    borderTopColor: '#4b5563',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
