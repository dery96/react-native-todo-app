import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

class NavigationBar extends Component {
  render() {
    return <View style={[styles.container]}>
        <Text style={styles.menuText}>Menu</Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 30,
    paddingTop: 5,
    backgroundColor: "#545455"
  },
  menuText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 10
  }
});
export default NavigationBar;
