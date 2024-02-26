import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CR7 CARECAKK</Text>
      <Text> CR7 </Text>
      <StatusBar style="auto" />
      <Image
    style={{width:  150, height:  150}}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-b_T6RqK6jKHLTpg-8Fbi9cL2qSUJYttS75woXRLYw&s'}}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
