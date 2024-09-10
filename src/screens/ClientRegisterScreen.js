import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { useState } from "react"
import { instanceAxios as axios } from "../config/axiosInstance"

export default function ClientRegisterScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const registerHandler = async () => {
    try {
      setIsLoading(true)
      await axios({
        method: "POST",
        url: "/clients/register",
        data: {
          email,
          phoneNumber,
          password
        }
      })
      navigation.navigate("LoginScreen")
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Client Register</Text>
        <Text style={styles.subtitle}>Create account in this app</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder={"Type here your email"} placeholderTextColor={"#9ca3af"} />
        </View>
        <View>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} onChangeText={setPhoneNumber} value={phoneNumber} placeholder={"Type here your number"} placeholderTextColor={"#9ca3af"} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder={"Type here your password"} placeholderTextColor={"#9ca3af"} secureTextEntry={true} />
        </View>
        <TouchableHighlight style={styles.button} onPress={registerHandler}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonAlt} onPress={() => { navigation.navigate("RegisterScreen") }} underlayColor={"#9ca3af"} activeOpacity={0.5}>
          <Text style={styles.buttonTextAlt}>Sign in</Text>
        </TouchableHighlight>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1D204C",
    marginBottom: 0,
    paddingBottom: 0,

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
  },
  button: {
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
  buttonAlt: {
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 300,
    marginHorizontal: 12,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1D204C"
  },
  buttonTextAlt: {
    color: "#1D204C",
    fontSize: 15,
    fontWeight: "600",
  }
})