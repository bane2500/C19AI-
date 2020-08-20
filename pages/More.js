import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Form } from "react-native";

import { gql, useQuery } from "@apollo/client";
const getTestQuery = gql`
  {
    business(id: "garaje-san-francisco") {
      name
      id
      alias
      rating
      url
    }
  }
`;

export default function More() {
  const { loading, error, data } = useQuery(getTestQuery);
  useEffect(() => {
    fetch("https://api.yelp.com/v3/graphql", {});
  });

  return (
    <View>
      <Text>Contact</Text>
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
});
