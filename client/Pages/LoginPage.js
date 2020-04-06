import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function LoginPage() {
  const logged = false;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page Coming Soon ... </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A324B",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 30,
    color: "#fff",
    alignItems: "center",
  },
});
