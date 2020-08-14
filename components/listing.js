// A custom Listing Component made from Flatlist
import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, List } from "react-native";
export default function BusinessList({ list }) {
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  return (
    <View style={styles.gloablContainer}>
      <FlatList
        keyExtractor={(item) => `list-item-${item.id}`}
        data={list}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => (
          <View style={styles.generalContainer}>
            <View style={styles.topInfo}>
              <Text style={[styles.setFontSize, styles.setColorGreen]}>
                {item.name}
              </Text>
              <Text>
                OPEN: {item.hours[0]} to {item.hours[1]}
              </Text>
            </View>
            <View style={styles.storeImage}>
              <Image
                style={{ flex: 1, maxHeight: "100%", maxWidth: "100%" }}
                // Todo: custom images for restaurants
                source={
                  !(item.name.length % 2)
                    ? require("../assets/og-share-image-2.jpeg")
                    : require("../assets/chinese.jpg")
                }
              />
            </View>
            <View style={styles.bottom}>
              <View style={styles.bottomComponent}>
                <Text>Mask Usage: {item.mask}%</Text>
              </View>
              <View style={styles.bottomComponent}>
                <Text>Store Occupancy: {item.occupancy}%</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gloablContainer: {
    flex: 1,
    width: "90%",
  },
  generalContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  topInfo: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  storeImage: {
    flex: 1,
    alignItems: "center",
    width: "90%",
    height: 100,
    marginBottom: 10,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: "90%",
  },
  bottomComponent: {
    flex: 1,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  setFontSize: {
    fontSize: 30,
  },
  setColorGreen: {
    color: "#37CE6A",
  },
});
