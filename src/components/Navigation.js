import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ChatScreen from "../screens/ChatScreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ChatScreen />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
