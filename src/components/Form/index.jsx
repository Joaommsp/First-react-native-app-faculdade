import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.formItem}>
          <Text style={styles.label}>Media Etapa 1</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.label}>Media Etapa 2</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.formBtnItem}>
          <TouchableOpacity style={styles.formBtn}>
            <Text style={styles.formBtnText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Form;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    width: "100%",
    position: "relative",
    padding: 10,

    borderRadius: 10,
  },

  formItem: {
    marginBottom: 26,
  },

  formBtnItem: {
    alignItems: "center"
  },

  input: {
    backgroundColor: "#DDDDDD",
    height: 50,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 16,
  },

  label: {
    marginBottom: 10,
    color: "#ffffff",
    fontSize: 16,
  },

  formBtn: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#4E9F3D",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5
  },
  
  formBtnText: {
    color: "#ffffff",
    fontSize: 20
  }
});
