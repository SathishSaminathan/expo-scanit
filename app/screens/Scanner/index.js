import React, { Component } from "react";
import { View, Text } from "react-native";
import Scanner from "../../components/Scanner/Scanner";

export default class ScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Scanner {...this.props} />;
  }
}
