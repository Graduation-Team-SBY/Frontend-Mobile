import { StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"
export default function LoginScreen(props) {
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email}></TextInput>
      </View>
    </>
  )

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25
  }
})