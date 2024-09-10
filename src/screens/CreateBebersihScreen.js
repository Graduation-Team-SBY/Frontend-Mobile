import { StyleSheet, Text, TextInput, View, TouchableHighlight, KeyboardAvoidingView } from "react-native";
import { instanceAxios as axios } from "../config/axiosInstance";
import { useState } from "react"
export default function CreateBebersihScreen({ navigation }) {
  const [fee, setFee] = useState(0)
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [addressNotes, setAddressNotes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const createJob = async () => {
    setIsLoading(true)
    try {
      await axios({
        method: "POST",
        url: "/clients/jobs/bebersih",
        data: {
          fee,
          description,
          address,
          addressNotes
        }
      })
    } catch (error) {
      console.log(err)
    } finally {
      setIsLoading(true)
      navigation.navigate("HomeClient")
    }
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Let's start with your first job post.</Text>

        <View>
          <Text style={styles.label}>Fee</Text>
          <TextInput style={styles.input} onChangeText={setFee} value={fee} placeholder={"Type here your email"} placeholderTextColor={"#9ca3af"} />
        </View>
        <View>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder={"Type here your job description"} placeholderTextColor={"#9ca3af"} />
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} onChangeText={setAddress} value={address} placeholder={"Type here your address"} placeholderTextColor={"#9ca3af"} />
        </View>
        <View>
          <Text style={styles.label}>Address Notes</Text>
          <TextInput style={styles.input} onChangeText={setAddressNotes} value={addressNotes} placeholder={"Type here your address notes"} placeholderTextColor={"#9ca3af"} />
        </View>
        <TouchableHighlight style={styles.button} onPress={createJob}>
          <Text style={styles.buttonText}>Buat Orderan</Text>
        </TouchableHighlight>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1D204C",
    paddingBottom: 15,
    paddingHorizontal: 20

  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#9ca3af",
  },
  label: {
    marginHorizontal: 12,
    marginBottom: 12,
    color: "#1D204C",
    fontWeight: "600"
  },
  input: {
    height: 50,
    width: 300,
    marginHorizontal: 12,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#9ca3af",
    backgroundColor: "#ffffff"
  }, button: {
    backgroundColor: "#1D204C",
    height: 50,
    width: 300,
    marginHorizontal: 12,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
})