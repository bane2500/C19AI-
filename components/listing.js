// A custom Listing Component made from Flatlist
import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
export default function BusinessList({ list }) {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => `list-item-${item.id}`}
        data={list}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#68a0cf",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              margin: "5%",
              padding: "5%",
            }}
          >
            <Text>{item.name}</Text>
            <Text>
              OPEN: {item.hours[0]}:00 to {item.hours[1]}:00
            </Text>
            <Text>Mask: {item.mask}%</Text>
            <Text>Occupancy: {item.occupancy}%</Text>
            <Text>Distance: {item.distance}%</Text>
          </View>
        )}
      />
    </View>
  );
}
