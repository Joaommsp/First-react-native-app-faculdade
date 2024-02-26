import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CR7 CARECAKK</Text>
      <Text> CR7 </Text>
      <StatusBar style="auto" />
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-b_T6RqK6jKHLTpg-8Fbi9cL2qSUJYttS75woXRLYw&s",
        }}
      />
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://ih1.redbubble.net/image.5160944362.1058/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
