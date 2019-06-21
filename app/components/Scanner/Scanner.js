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
      hasCameraPermission: status === "granted"
    });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    console.log("type:", type);
    this.setState(
      {
        data: data && JSON.parse(data)
      },
      () => console.log("data:", this.state.data.age)
    );
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return (
        <Text style={styles.statusBarHeight}>
          Requesting for camera permission
        </Text>
      );
    }
    if (hasCameraPermission === false) {
      return <Text style={styles.statusBarHeight}>No access to camera</Text>;
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
          // <Text
          //   style={styles.cancel}
          //   onPress={() => this.setState({ scanned: false })}
          // >
          //   Tap to Scan Again
          // </Text>
          <Feather
            name="refresh-ccw"
            style={styles.rescanIcon}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
        <Feather name="x" style={styles.cancel} />
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
