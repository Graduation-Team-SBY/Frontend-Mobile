import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function WorkerReview({ review }) {
  return (
    <View style={styles.containerReviews}>
      <View style={styles.cardReview}>
        {/* Avatar, name, rating */}
        <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            src={review.client.profilePicture}
          />
          <View>
            <Text style={{ fontWeight: '700' }}>{review.client.name}</Text>
            <Text style={{ fontWeight: '600' }}>
              <AntDesign name="star" size={16} color="#eab308" /> {review.rating}
            </Text>
          </View>
        </View>
        {/* Pesan */}
        <View style={{ marginVertical: 18 }}>
          <Text style={{ fontWeight: '700' }}>Pesan:</Text>
          <Text>{review.description}</Text>
        </View>
        {/* Foto */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {/* contoh looping */}
          {review.images.map((_, index) => {
            return (
              <Image
                key={index}
                style={{ width: 50, height: 50, borderRadius: 10 }}
                src={_}
              />
            );
          })}
        </View>
      </View>
    </View>
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