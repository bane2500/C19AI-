import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
export default function Contact() {
  // Updates when slider distance changes
  /*
  useEffect(() => {
    console.log(distance);
  }, [distance]);
  */

  return (
    // Todo: Implement Contact Page
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contact Page</Text>
      <Image
        source={{
          uri:
            "https://s3-media3.fl.yelpcdn.com/bphoto/wgu8DGfUYHO5dxKUvdv9gw/o.jpg",
        }}
        style={{ flex: 1, height: 50, width: 40 }}
      />
    </View>
  );
}
