import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { useState, useContext } from "react"
import { instanceAxios as axios, instanceAxios } from "../config/axiosInstance"
import * as SecureStore from "expo-secure-store"
import { AuthContext } from "../contexts/auth"
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { setIsSignedIn } = useContext(AuthContext)
  const loginHandler = async () => {
    try {
      setIsLoading(true)
      const { data } = await instanceAxios({
        method: "POST",
        url: "/login",
        data: {
          email,
          password
        }
      })
      await Promise.all([SecureStore.setItemAsync("access_token", data.access_token), SecureStore.setItemAsync("role", data.role)])
      setIsSignedIn(true)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>
        <View>
          <Text style={styles.label}> Email</Text>
          <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder={"Type here your email"} placeholderTextColor={"#9ca3af"} />
        </View>
        <View>
          <Text style={styles.label}> Password</Text>
          <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder={"Type here your password"} placeholderTextColor={"#9ca3af"} />
        </View>
        <TouchableHighlight style={styles.button} onPress={loginHandler}>
          <Text style={styles.buttonText}>Login</Text>
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
  }
})