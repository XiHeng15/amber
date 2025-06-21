
import { View, StyleSheet } from "react-native";
import HomeAmberInfo from "@/components/HomeAmberInfo";
import Map from "@/components/Map";
import { useState } from "react";

export default function HomeScreen() {
  const [amberActive, setAmberActive] = useState(true);

  return (
    <View style={styles.container}>
      <HomeAmberInfo/>
      <Map amberActive={amberActive}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});