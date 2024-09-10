import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SignalIcon } from 'react-native-heroicons/solid';
import { CurrencyDollarIcon } from 'react-native-heroicons/solid';
import Swiper from 'react-native-swiper';

export default function HomeClient({ navigation }) {
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
            <Text style={styles.textUser}>Aditya Saputra</Text>
            <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
              Rp 0,00
            </Text>
          </View>
          <View style={styles.ewalletJustify}>
            <View style={styles.ewalletButton}>
              <View style={styles.topUpLogo}>
                <FontAwesome name="credit-card" size={20} color="black" />
                <Text>Top Up</Text>
              </View>
              <View style={styles.topUpLogo}>
                <FontAwesome5 name="arrow-circle-up" size={20} color="black" />
                <Text>Transfer</Text>
              </View>
            </View>
            <SignalIcon color={'#FFF'} size={32} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>
            Halo, <Text style={styles.span}>Adit</Text> !
          </Text>
        </View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Mau ngapain hari ini?
        </Text>
        <View style={styles.containerCard}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CreateNitip")}>
            <Image
              source={require('../assets/shopping-bag.png')}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nitip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CreateBebersih")}>
            <Image
              source={require('../assets/bucket.png')}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bebersih</Text>
          </TouchableOpacity>
        </View>
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
                source={require('../assets/banner1.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../assets/banner2.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../assets/banner3.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../assets/banner4.png')}
                style={styles.image}
              />
            </View>
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
    padding: 20,
    gap: 32,
    marginVertical: 12,
  },
  containerCard: {
    flexDirection: 'row',
    width: '100%',
    gap: 20,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    borderRadius: 12,
    gap: 12,
    backgroundColor: '#FFFFFF',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
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
    fontSize: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textHeadingEwallet: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ewalletButton: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    gap: 32,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    justifyContent: 'space-between',
  },
  topUpLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
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
    borderRadius: 12
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
});
