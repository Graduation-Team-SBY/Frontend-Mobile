import * as SecureStore from "expo-secure-store";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
// export default function Logout() {
//   const { setIsSignedIn } = useContext(AuthContext);
//   const logoutHandler = async () => {
//     try {
//       await Promise.all([
//         SecureStore.deleteItemAsync("role"),
//         SecureStore.deleteItemAsync("access_token"),
//       ]);
//       setIsSignedIn(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   <Button title="Logout" onPress={logoutHandler} />
// </View>

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.chatContainer}>
//         <View style={styles.messageContainer}>
//           <Text style={styles.userText}>Mumei</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
export default function Chat({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1761684017722847233/Oay_LeWL_400x400.jpg",
          }}
          style={styles.profilePic}
        />
        <View style={styles.headerText}>
          <Text style={styles.userName}>Nanashi Mumei</Text>
          {/* <Text style={styles.status}>Online</Text> */}
        </View>
      </View>

      <ScrollView style={styles.chatContainer}>
        <View style={styles.messageWrapper}>
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1761684017722847233/Oay_LeWL_400x400.jpg",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.incomingMessage}>
            <Text>Hai...</Text>
          </View>
        </View>

        <View style={styles.messageWrapper}>
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1761684017722847233/Oay_LeWL_400x400.jpg",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.incomingMessage}>
            <Text>Apa hari ini ada collab?</Text>
          </View>
        </View>

        <View style={styles.outgoingWrapper}>
          <View style={styles.outgoingMessage}>
            <Text style={styles.outgoingText}>Tentu</Text>
          </View>
          <Image
            source={{
              uri: "https://yt3.googleusercontent.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s900-c-k-c0x00ffffff-no-rj",
            }}
            style={styles.profilePicSmall}
          />
        </View>

        <View style={styles.outgoingWrapper}>
          <View style={styles.outgoingMessage}>
            <Text style={styles.outgoingText}>
              Mari kita diskusikan terlebih dahulu untuk collab lebih lanjut ,
              aku yakin kita pasti bisa menjadi idol sebenermya
            </Text>
          </View>
          <Image
            source={{
              uri: "https://yt3.googleusercontent.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s900-c-k-c0x00ffffff-no-rj",
            }}
            style={styles.profilePicSmall}
          />
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Ketikan pesan di sini" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>
            <Ionicons name="send-sharp" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FE",
  },
  header: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    color: "green",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  messageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  profilePicSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  incomingMessage: {
    maxWidth: "70%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    marginBottom: 5,
  },
  outgoingWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  outgoingMessage: {
    maxWidth: "70%",
    backgroundColor: "#1D204C",
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    marginBottom: 5,
  },
  outgoingText: {
    color: "#ffffff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F1F3F8",
    borderRadius: 25,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#1D204C",
    padding: 10,
    borderRadius: 999,
    alignItems: "center",
    width: 40,
    height: 40,
  },
  sendButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
