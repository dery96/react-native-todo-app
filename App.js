import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return <View style={styles.container}>
        <Text style={styles.text}>Pierwsza aplikacja w React Native</Text>
        <Text style={styles.text}>
          Ciekawy jestem ile <Text style={styles.strong}>
            czasu zajmie reload?
          </Text>
        </Text>
        <Image style={{ margin: 20, width: 66, height: 58 }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  },
  strong: {
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
});
