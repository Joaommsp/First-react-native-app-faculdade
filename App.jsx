import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import Logo from "./src/components/Logo";
import Form from "./src/components/Form";

export default function App() {
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <ImageBackground style={styles.container0}>
        <Logo></Logo>
        </ImageBackground>
        <Text style={styles.title}>RECEBA MÉDIA</Text>
        <View style={styles.container1}>
          <Form></Form>
        </View>
        <View style={styles.container2}>
   
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",

    backgroundColor: "#222831",
    alignItems: "center",
  },

  title :{
    fontSize: 36,
    marginTop: 34,
    color: "#FFFFFF"
  },

  container0 : {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 36,

    backgroundColor: "#FFFFFF"
  },

  container1: {
    width: "90%",
    height: "200px",

    marginTop: 34,
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    width: "90%",
    backgroundColor: "#00000090",
    alignItems: "center",
    justifyContent: "center",
  },
});


