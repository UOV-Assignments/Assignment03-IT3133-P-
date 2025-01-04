import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { students } from "../assets/dataset/studentdb";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
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
          secureTextEntry={showPassword ? true : false}
          mode="outlined"
          style={styles.textInput}
        />
        {showPassword ? (
          <Icon
            name="visibility"
            size={24}
            color="gray"
            style={styles.eyeIcon}
            onPress={() => setShowPassword(false)}
          />
        ) : (
          <Icon
            name="visibility-off"
            size={24}
            color="gray"
            style={styles.eyeIcon}
            onPress={() => setShowPassword(true)}
          />
        )}
        <Button mode="contained" style={styles.button}>
          Login
        </Button>
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
  button: {
    width: 300,
    borderRadius: 20,
    textAlign: "center",
    marginTop: 20,
  },
  eyeIcon:{
    position: 'absolute',
    right: 57,
    top: 95,
    zIndex: 999999,
    color: 'gray'
  }
});
