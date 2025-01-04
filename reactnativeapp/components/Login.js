import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
});
