import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

export default function HistoryOrdersClientScreen() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Beberes" },
    { key: "2", value: "Nitip" },
  ];
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>History Orders</Text>
        <View style={styles.flex}>
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
            }}
          />
        </View>
        {/* Card */}
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <View key={item} style={styles.card}>
              <View style={styles.flexBetween}>
                <Text>March 08, 2024</Text>
                <Text style={styles.tag}>Beberes</Text>
              </View>
              <Text style={styles.title}>Pencuci Piring</Text>
              <View>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Text>
                <Text style={{ marginTop: 20 }}>Insentif: Rp. 50.000,00</Text>
              </View>
            </View>
          );
        })}
        {/* Card */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  flex: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    gap: 20,
  },
  flexBetween: {
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
});
