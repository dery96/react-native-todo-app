import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return <View style={styles.container}>
        <Text style={styles.text}>Overdue</Text>
        <Todo taskName="Call Chris" scheduleTime="Today, 10:00" />
        <Todo taskName="Meeting with Jo" scheduleTime="Today, 11:00" />
        <Todo taskName="Pay Bills" scheduleTime="Tomorrow, 13:00" />

        <Text style={styles.text}>Today</Text>
        <Todo taskName="Call Chris" scheduleTime="Today, 10:00" />
        <Todo taskName="Meeting with Jo" scheduleTime="Today, 11:00" />
        <Todo taskName="Pay Bills" scheduleTime="Tomorrow, 13:00" />
      </View>;
  }
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    padding: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.6
  },
  text: {
    padding: 5,
    fontSize: 16,
    fontWeight: "500"
  }
});
