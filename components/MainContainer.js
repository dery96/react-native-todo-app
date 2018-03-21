import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import NavigationBar from "./NavigationBar";
import TodoList from "./TodoList";
import ToDoInput from "./ToDoInput";

class MainContainer extends Component {
  render() {
    return <View style={styles.container}>
        <NavigationBar />
        <TodoList />
        <ToDoInput />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#232020"
  }
});
export default MainContainer;
