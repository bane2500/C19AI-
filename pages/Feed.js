import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import BusinessList from "../components/listing";
export default function Feed() {
  // Hooks implementation of searchbar in react-native
  const [searchText, setSearchText] = useState("");
  const updateText = (event) => {
    setSearchText(event);
  };

  //Dummy Data for businesses
  const businesses = [
    //For simplicity sakes, mask and occupancy will be in percentage, distance in miles
    {
      name: "Taco Cabana",
      hours: [9, 17],
      mask: 80,
      occupancy: 40,
      distance: 3,
      id: "1", //List items should have unique identifiers
    },
    {
      name: "TJ's Mormon Shop",
      hours: [8, 10],
      mask: 20,
      occupancy: 60,
      distance: 5,
      id: "2",
    },
    {
      name: "Beanstalk Cafe",
      hours: [12, 18],
      mask: 65,
      occupancy: 80,
      distance: 7,
      id: "3",
    },
    {
      name: "LittleField Cafe",
      hours: [14, 17],
      mask: 100,
      occupancy: 1,
      distance: 8,
      id: "4",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Search for businesses here"
        platform="ios" // Todo: get this working on android as well
        onChangeText={updateText}
        value={searchText}
      />
      <BusinessList list={businesses} />
    </View>
  );
}