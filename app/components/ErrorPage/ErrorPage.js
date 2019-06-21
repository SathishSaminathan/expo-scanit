import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Constants } from "expo";
import StatusBar from '../StatusBar/StatusBar';

const { width, height } = Dimensions.get("window");

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View
        style={{
          flex: 1
        }}
      >
        <StatusBar />
        <View
          style={{
            width,
            height: height-80,
            paddingTop: Constants.statusBarHeight
          }}
        >
          <Image
            style={{ flex: 1, width: null, height: null }}
            resizeMode="contain"
            source={require("../../../assets/images/allowpermission.png")}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 20,
            backgroundColor: "black",
            marginHorizontal: 20
          }}
          onPress={()=>this.props.askPermission()}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            OOPS!!! Allow Access to Scan QR
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
