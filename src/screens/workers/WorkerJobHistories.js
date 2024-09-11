import { useState, useEffect } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import OrderHistoryCard from "../../components/OrderHistoryCard";
export default function WorkerJobHistories() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Beberes" },
    { key: "2", value: "Nitip" },
  ];

  const [orderHistories, setOrderHistories] = useState([])

  useEffect(() => {

  }, [])

  return (
    <>
      <ScrollView style={{
        backgroundColor: '#FAF9FE',
      }}>
        <View style={styles.container}>
          {/* <Text style={styles.heading}>History Orders</Text> */}
          <View style={styles.contentContainer}>
            {/* <Text style={{ paddingBottom: 10 }}>Filter:</Text> */}
            <MultipleSelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              onSelect={() => alert(selected)}
              label="Categories"
              placeholder="Category"
              boxStyles={{
                borderWidth: 0,
                width: "100%"
              }}
            />
          </View>
          {/* Card */}
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <OrderHistoryCard key={item} item={item} />
            );
          })}
          {/* Card */}
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
    marginVertical: 4,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
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
  contentContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    gap: 20,
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
});
