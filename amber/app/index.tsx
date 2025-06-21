
import { View, StyleSheet } from "react-native";
import HomeAmberInfo from "@/components/HomeAmberInfo";
import Map from "@/components/Map";
import { useState } from "react";

export default function HomeScreen() {
  const [amberActive, setAmberActive] = useState(false);

  return (
    <View style={styles.container}>
      <Map amberActive={amberActive}/>
      <HomeAmberInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000'
  }
});