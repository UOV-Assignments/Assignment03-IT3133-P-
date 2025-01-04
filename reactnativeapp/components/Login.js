import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

export default function Login() {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://vau.ac.lk/wp-content/uploads/2021/07/cropped-UoV_Logo.png",
          }}
          style={styles.banner}
        />
      </View>
      <View>
        <Text style={styles.heading}>{"Student Login".toUpperCase()}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput label="Username" mode="outlined" style={styles.textInput} />
        <TextInput
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          style={styles.textInput}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  textInput: {
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
});
