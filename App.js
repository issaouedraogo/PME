import React, { Component } from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";

import LoginPage from './client/Pages/LoginPage'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage/>
        <Text>
        Try editing me! 🎉
      </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default App;