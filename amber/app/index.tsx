
import { View, StyleSheet } from "react-native";
import HomeAmberInfo from "@/components/HomeAmberInfo";
import Map from "@/components/Map";
import { useState } from "react";
import FaceButton from "@/components/FaceButton";

export default function HomeScreen() {
  const [amberActive, setAmberActive] = useState(false);

  return (
    <View style={styles.container}>
      <FaceButton
      size={100}
      />
      <Map amberActive={amberActive}/>
      <HomeAmberInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  }
});

