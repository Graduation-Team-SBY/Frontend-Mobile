import * as SecureStore from "expo-secure-store";
import { useContext, useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import newSocket from "../config/socketInstance";

export default function Chat({ navigation, route }) {
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);
  const [workerProfile, setWorkerProfile] = useState({});
  const [clientProfile, setClientProfile] = useState({});
  const [message, setMessage] = useState("");
  const [senderId, setSenderId] = useState(null);
  const [chatId, setChatId] = useState("");
  const scrollViewRef = useRef();

  const socketHandler = async () => {
    try {
      const storedRole = await SecureStore.getItemAsync("role");
      const socketInstance = newSocket;
      setSocket(socketInstance);

      // Join the room with jobId
      socketInstance.emit("join_room", route.params.jobId);

      // Handle receiving messages
      socketInstance.on("receive_message", (data) => {
        setChats((curr) => [...curr, data]);
      });

      // Handle joining confirmation
      socketInstance.on("joined_room", (data) => {
        setChats(data.chats.contents);
        setWorkerProfile(data.workerProfile);
        setClientProfile(data.clientProfile);

        if (storedRole === "jalu") {
          setSenderId(data.currJob.clientId);
        } else if (storedRole === "yasa") {
          setSenderId(data.currJob.workerId);
        }

        setChatId(data.currJob.chatId);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socketHandler();
    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [chats]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      const messageData = {
        senderId: senderId,
        message: message,
        room: route.params.jobId,
        createdAt: new Date()
      };
      socket.emit("send_message", messageData, chatId, senderId);
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: clientProfile?.profilePicture || "https://pbs.twimg.com/profile_images/1761684017722847233/Oay_LeWL_400x400.jpg"
          }}
          style={styles.profilePic}
        />
        <View style={styles.headerText}>
          <Text style={styles.userName}>{clientProfile?.name || "User"}</Text>
        </View>
      </View>

      <ScrollView style={styles.chatContainer} ref={scrollViewRef}>
        {chats.map((chat, index) => (
          chat.senderId === senderId ? (
            <View key={index} style={styles.outgoingWrapper}>
              <View style={styles.outgoingMessage}>
                <Text style={styles.outgoingText}>{chat.message}</Text>
              </View>
              <Image
                source={{ uri: workerProfile?.profilePicture }}
                style={styles.profilePicSmall}
              />
            </View>
          ) : (
            <View key={index} style={styles.messageWrapper}>
              <Image
                source={{ uri: clientProfile?.profilePicture }}
                style={styles.profilePicSmall}
              />
              <View style={styles.incomingMessage}>
                <Text>{chat.message}</Text>
              </View>
            </View>
          )
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send-sharp" size={20} color="white" />
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