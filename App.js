import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Permissions, BarCodeScanner } from "expo";
import Scanner from "./app/components/Scanner/Scanner";
import HomeScreen from "./app/screens/Home";
import StackContainer from "./app/navigation/Appstacknavigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false
    };
  }
  
  render() {
    return <StackContainer />;
  }
}
