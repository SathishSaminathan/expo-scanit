import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  Image
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Permissions, Constants } from "expo";
import { Feather } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";

import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

const { width, height } = Dimensions.get("window");
const qrSize = width * 0.7;

class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    data: {}
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status 
    });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    try {
      this.setState(
        {
          data: data && JSON.parse(data),
          visible: true
        },
        // () => console.log("data:", this.state.data.age)
      );
    } catch (err) {
      this.setState({
        visible: true
      });
    }
  };

  render() {
    const { hasCameraPermission, scanned, visible } = this.state;

    if (hasCameraPermission === null) {
      return <Loader />;
    }
    if (hasCameraPermission === "denied") {
      return <ErrorPage askPermission={()=>this._requestCameraPermission()}/>;
    }

    return (
      <BarCodeScanner
        onBarCodeRead={scanned ? undefined : this.handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <Text style={styles.description}>Scan your QR code</Text>
        <Image
          style={styles.qr}
          source={require("../../../assets/images/scanner.png")}
        />
        {scanned && (
          <Feather
            name="refresh-ccw"
            style={styles.rescanIcon}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
        <Feather
          name="x"
          style={styles.cancel}
          onPress={() => this.props.navigation.goBack()}
        />
        <Snackbar
          visible={visible}
          onDismiss={() => this.setState({ visible: false, data: {} })}
          action={{
            label: "Undo",
            onPress: () => {
              // Do something
            }
          }}
          duration={3000}
        >
          {this.state.data.name
            ? `Data got from the QR Code are...${this.state.data.name} and ${
                this.state.data.age
              }`
            : "Sorry wrong QR Code Scanned"}
        </Snackbar>
      </BarCodeScanner>
    );
  }
}
export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  qr: {
    marginTop: "20%",
    marginBottom: "20%",
    width: qrSize,
    height: qrSize
  },
  description: {
    fontSize: width * 0.09,
    marginTop: "10%",
    textAlign: "center",
    width: "70%",
    color: "white"
  },
  cancel: {
    fontSize: 50,
    color: "white",
    position: "absolute",
    left: 0,
    top: "5%"
  },
  rescanIcon: {
    position: "absolute",
    color: "white",
    bottom: 30,
    fontSize: 60
  },
  statusBarHeight: {
    top: Constants.statusBarHeight
  }
});
