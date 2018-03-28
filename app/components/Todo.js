import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";

class Todo extends Component {
  render() {
    return <View style={styles.container}>
        <Text style={styles.taskName}> {this.props.taskName} </Text>
        <Text style={styles.scheduleTime}> {this.props.scheduleTime} </Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 2,
    borderColor: 'black',
    margin: 5,
  },
  taskName: {
    fontSize: 20
  },
  scheduleTime: {
    color: "#0277BD",
    fontSize: 10,
    fontWeight: "300",
    paddingLeft: 5,
  }
});
export default Todo;
