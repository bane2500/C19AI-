import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

export default function ProgressBar({ percentage }) {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: "1",
      width: `${percentage}%`,
    };
    setStyle(newStyle);
  }, 200);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  progress: {
    backgroundColor: "#d8d8d8",
    borderRadius: 20,
    position: "relative",
    margin: "15 0",
    height: 30,
    width: 300,
  },
  progressDone: {},
});
