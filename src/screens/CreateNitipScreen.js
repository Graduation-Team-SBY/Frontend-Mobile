import { StyleSheet, Text, TextInput, View, TouchableHighlight } from "react-native";
import { instanceAxios as axios } from "../config/axiosInstance";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function CreateNitipScreen({ navigation }) {
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
        url: "/clients/jobs/nitip",
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
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Let's start with your first job post.</Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Fee</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setFee}
                  value={fee}
                  placeholder={"Enter the fee"}
                  placeholderTextColor={"#9ca3af"}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setDescription}
                  value={description}
                  placeholder={"Type here your job description"}
                  placeholderTextColor={"#9ca3af"}
                  multiline
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAddress}
                  value={address}
                  placeholder={"Type here your address"}
                  placeholderTextColor={"#9ca3af"}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Address Notes</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAddressNotes}
                  value={addressNotes}
                  placeholder={"Type here your address notes"}
                  placeholderTextColor={"#9ca3af"}
                />
              </View>
              <TouchableHighlight
                style={styles.button}
                onPress={createJob}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? "Creating..." : "Buat Orderan"}
                </Text>
              </TouchableHighlight>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D204C",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: "#1D204C",
    fontWeight: "600",
  },
  input: {
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#9ca3af",
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#1D204C",
    height: 50,
    width: "100%",
    marginTop: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
})