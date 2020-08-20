import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import SubmitButton from "../components/button";
import RNPickerSelect from "react-native-picker-select";
export default function Contact({}) {
  const [picker, setPicker] = useState("");
  const [message, setMessage] = useState("");

  // Update Selection
  const updateSelect = (event) => {
    setPicker(event);
  };
  const updateMessage = (event) => {
    setMessage(event.nativeEvent.text);
  };

  useEffect(() => {
    console.log(picker);
  }, [picker]);
  // Placeholder
  const placeholder = {
    label: "Select...",
    value: null,
    color: "#9EA0A4",
  };
  const onSubmitEnter = () => {
    Alert.alert("Text: ", message);
  };
  return (
    // Todo: Implement More Page
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          width: "80%",
          marginTop: "30%",
        }}
      >
        <Text style={{ paddingBottom: 5 }}>What do you want to ask?</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={updateSelect}
          placeholder={placeholder}
          items={[
            { label: "Bug", value: "Bug" },
            { label: "Suggestion", value: "Suggestion" },
            { label: "Other", value: "other" },
          ]}
        />
        <Text style={{ marginTop: 50, paddingBottom: 5 }}>
          Tell Us A Bit More Below
        </Text>
        <TextInput
          placeholder="Type Your Request Here..."
          keyboardType="default"
          returnKeyType={"done"}
          onChange={updateMessage}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          style={{
            height: "20%",
            marginBottom: 50,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "black",
          }}
          scrollEnabled={true}
          multiline
          editable
          maxLength={120}
          numberOfLines={10}
        />
        <SubmitButton
          disabled={message === "" || picker === "" || picker === null}
          onPress={onSubmitEnter}
          title="Submit"
        />
      </View>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
