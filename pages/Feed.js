import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Slider } from "react-native";
import { SearchBar } from "react-native-elements";
import BusinessList from "../components/listing";

export default function Feed() {
  // Hooks implementation of searchbar in react-native
  const [searchText, setSearchText] = useState("");

  // dummy distance will be shown updating as the slider slides, distance will only update when the slider completes
  const [dummyDistance, setDummyDistance] = useState(10);
  const [distance, setDistance] = useState(10);
  const updateText = (event) => {
    setSearchText(event);
  };
  const slidingComplete = (value) => {
    setDistance(dummyDistance);
  };

  //Dummy Data for businesses
  const businesses = [
    //For simplicity sakes, mask and occupancy will be in percentage, distance in miles
    {
      name: "Taco Cabana",
      hours: ["9:00 AM", "5:00 PM"],
      mask: 80,
      occupancy: 40,
      distance: 3,
      id: "1", //List items should have unique identifiers
    },
    {
      name: "TJ's Mormon Shop",
      hours: ["8:00 AM", "10:00 AM"],
      mask: 20,
      occupancy: 60,
      distance: 5,
      id: "2",
    },
    {
      name: "Beanstalk Cafe",
      hours: ["12:00 PM", "6:00 PM"],
      mask: 65,
      occupancy: 80,
      distance: 7,
      id: "3",
    },
    {
      name: "LittleField Cafe",
      hours: ["2:00 PM", "10:00 PM"],
      mask: 100,
      occupancy: 1,
      distance: 8,
      id: "4",
    },
    {
      name: "Jay's Burrito Joint",
      hours: ["12:00 PM", "6:00 PM"],
      mask: 70,
      occupancy: 80,
      distance: 12,
      id: "5",
    },
    {
      name: "Covfefe",
      hours: ["12:00 PM", "6:00 PM"],
      mask: 50,
      occupancy: 18,
      distance: 14,
      id: "6",
    },
    {
      name: "Oh You're Approaching Me",
      hours: ["2:00 PM", "10:00 PM"],
      mask: 100,
      occupancy: 1,
      distance: 1,
      id: "7",
    },
    {
      name: "H-Mart",
      hours: ["12:00 PM", "6:00 PM"],
      mask: 65,
      occupancy: 80,
      distance: 9,
      id: "8",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchBar
        placeholder="Search for businesses here"
        platform="ios" // Todo: get this working on android as well
        onChangeText={updateText}
        value={searchText}
      />
      <Text>
        Distance: {dummyDistance} {dummyDistance <= 1 ? "Mile" : "Miles"}
      </Text>
      <Slider
        value={dummyDistance}
        style={styles.slider}
        minimumValue={1}
        maximumValue={20}
        step={1}
        valueLabelDisplay="auto"
        onValueChange={(value) => setDummyDistance(parseInt(value))}
        onSlidingComplete={slidingComplete}
      />
      <BusinessList maxDistance={distance} list={businesses} />
    </View>
  );
}
const styles = StyleSheet.create({
  slider: {
    width: "80%",
  },
  points: {
    textAlign: "center",
    color: "#7591af",
    fontSize: 20,
    fontWeight: "100",
  },
});
