import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";

import Svg, { Path } from "react-native-svg";

import Swiper from "react-native-swiper";

export default function HomeClient() {
  return (
    <View style={styles.mainLayout}>
      <View style={styles.ewallet}>
        <View style={styles.headingEwallet}>
          <Text style={styles.textHeadingEwallet}>My Balance</Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-6"
            width="25"
          >
            <Path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
            <Path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
              clipRule="evenodd"
            />
          </Svg>
        </View>
        <View>
          <Text style={styles.textUser}>Aditya Saputra</Text>
          <Text style={{ color: "white", fontSize: 36, fontWeight: "bold" }}>
            Rp 0,00
          </Text>
        </View>
        <View style={styles.containerButtonEwallet}>
          <View style={styles.buttonEwallet}>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6"
              >
                <Path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                <Path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </Svg>
              <Text>Top Up</Text>
            </View>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <Path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                  clipRule="evenodd"
                />
              </Svg>
              <Text>Transfer</Text>
            </View>
          </View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8"
            width="100"
          >
            <Path
              fillRule="evenodd"
              d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
              clipRule="evenodd"
            />
          </Svg>
        </View>
      </View>
      <Text>
        <Text style={styles.title}>Halo, </Text>
        <Text style={styles.span}>Adit!</Text>
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Mau ngapain hari ini!
      </Text>
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <Image
            source={require("../assets/shopping-bag.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nitip</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/bucket.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bebersih</Text>
        </View>
      </View>
      {/* Swiper */}
      <View style={styles.containerSwiper}>
        <Swiper
          autoplay
          autoplayTimeout={3} // delay 3 detik
          loop={true}
          showsPagination={true}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/banner1.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banner2.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banner3.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banner4.png")}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      {/* Swiper */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  containerCard: {
    marginVertical: 6,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  card: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1D204C",
  },
  textUser: {
    color: "white",
    fontSize: 16,
  },
  span: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#05ECAE",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  headingEwallet: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHeadingEwallet: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    width: "48%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  containerButtonEwallet: {
    flexDirection: "row",
  },
  buttonEwallet: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 90,
    margin: 20,
    padding: 20,
    width: 200,
    height: 70,
  },
  ewallet: {
    // backgroundGradient: "horizontal",
    // backgroundLeft: "#05ECAE",
    // backgroundRight: "#1D204C",
    backgroundColor: "#05ECAE",
    width: "100%",
    height: 325,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
  containerSwiper: {
    height: 250,
    marginTop: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#007bff",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});
