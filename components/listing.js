// A custom Listing Component made from Flatlist
import { StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, List } from "react-native";
export default function BusinessList({ list, maxDistance }) {
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
        initialNumToRender={1}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => `list-item-${item.id}`}
        data={list.filter((item) => {
          return item.distance <= maxDistance;
        })}
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
                style={{
                  flex: 1,
                  height: 150,
                  width: 300,
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
                // Todo: custom images for restaurants
                source={{
                  uri: item.image,
                }}
              />
            </View>
            <View style={styles.bottom}>
              <View style={styles.bottomComponent}>
                <AnimatedCircularProgress
                  rotation={0}
                  size={110}
                  width={8}
                  backgroundWidth={18}
                  fill={(item.mask / 100) * 100}
                  duration={1000}
                  tintColor={item.mask < 70 ? "#ec2213" : "#37CE6A"}
                  backgroundColor="#3D5875"
                >
                  {(fill) => (
                    <Text style={styles.points}>
                      Mask{"\n"}
                      {Math.round((100 * ((item.mask / 100) * 100)) / 100)}%
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.bottomComponent}>
                <AnimatedCircularProgress
                  rotation={0}
                  size={110}
                  width={8}
                  backgroundWidth={18}
                  fill={(item.occupancy / 100) * 100}
                  duration={1000}
                  tintColor={item.occupancy > 50 ? "#ec2213" : "#37CE6A"}
                  backgroundColor="#3D5875"
                >
                  {(fill) => (
                    <Text style={styles.points}>
                      Ocp.{"\n"}
                      {Math.round((100 * ((item.occupancy / 100) * 100)) / 100)}
                      %
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  points: {
    textAlign: "center",
    color: "#7591af",
    fontSize: 20,
    fontWeight: "100",
  },
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
    height: 150,
    marginBottom: 10,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    height: 125,
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
