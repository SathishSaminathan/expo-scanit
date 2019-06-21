import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Constants } from "expo";

import StatusBar from "../../components/StatusBar/StatusBar";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const HEIGHT = 100;
const WIDTH = 100;

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <StatusBar />
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 50
            }}
          >
            ScanIt
          </Text>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={{ width: WIDTH, height: HEIGHT }}
          />
        </View>
        <TouchableOpacity
          style={{
            width: WIDTH,
            height: HEIGHT,
            position: "absolute",
            bottom: 10,
            left: width / 2 - WIDTH / 2,
            borderWidth: 2,
            borderColor: "black",
            borderRadius: WIDTH / 2,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.props.navigation.navigate("Scanner")}
        >
          <Image
            source={require("../../../assets/images/logo.png")}
            style={{ width: WIDTH / 2, height: HEIGHT / 2 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
