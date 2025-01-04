import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { courses, students } from "../assets/dataset/studentdb";
import Banner from "../Components/Banner";
import { Divider } from "react-native-paper";

export default function Course() {
  const user = students[0];
  const course = courses.find((course) => course.id === user.course_id);

  return (
    <ScrollView>
      <View>
        <Banner />
      </View>
      <View style={styles.container1}>
        <Text style={styles.heading}>{course.name}</Text>
        <Text
          style={styles.headingtext}
        >{`Code: ${course.course_code} | Dept: ${course.department}`}</Text>
        {/* Place Divider here */}
        <Divider style={styles.divider} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: "90%", // Use percentage width for better alignment
    backgroundColor: "white",
    alignSelf: "center",
    padding: 10,
    marginBottom: 40,
    borderRadius: 10, // Optional: Add some styling
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headingtext: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc", // Add a clear color for visibility
    marginVertical: 20, // Add some space around the Divider
  },
});
