import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

const plusImage = require("../assets/img/plus.png")

class ToDoInput extends Component {
  render() {
    return <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Icon name={'plus'} size={20} />
        </TouchableOpacity>
        <TextInput style={styles.field} value='Enter your email'/>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#545455"
  },
  button: {
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 5,
    shadowColor: "#303838",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.6
  },
});
export default ToDoInput;
