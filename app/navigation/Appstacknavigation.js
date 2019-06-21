import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import HomeScreen from "../screens/Home";
import ScannerScreen from "../screens/Scanner";

const stackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Scanner: ScannerScreen
  },
  {
    initialRouteName: "Home",
    headerMode:'none'
  }
);

const StackContainer = createAppContainer(stackNavigator);

export default StackContainer;
