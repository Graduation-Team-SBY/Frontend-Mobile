import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function OrderHistoryCard({ item }) {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.heading}>
          <Text>March 08, 2024</Text>
          <Text style={styles.tag}>Beberes</Text>
        </View>
        <Text style={styles.title}>Pencuci Piring</Text>
        <View>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
          </Text>
          <Text style={styles.feeDetail}>Insentif: Rp. 50.000,00</Text>
        </View>
      </View>
    </>
  )
};


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#05ECAE",
    padding: 6,
    borderRadius: 7,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  feeDetail: {
    marginTop: 20
  }
});
