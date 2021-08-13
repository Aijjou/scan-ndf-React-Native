import React, {Component} from 'react';
import {Header} from "react-native-elements"

export default class Navbar extends Component {
  render() {
    return (
        <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{ text: "SCAN-NDF", style: { color: "#fff", fontSize:25 } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    );
  }
}
