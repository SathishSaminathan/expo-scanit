import React, { Component } from "react";
import { View, Text, ActivityIndicator, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          position: "absolute",
          width,
          height,
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }
}
