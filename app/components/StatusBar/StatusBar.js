import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Constants } from "expo";

const { width, height } = Dimensions.get('window')

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{ backgroundColor: "black", height: Constants.statusBarHeight, position: 'absolute',top:0, width}}
      />
    );
  }
}
