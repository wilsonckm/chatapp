import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatScreen from "../screens/ChatScreen";
import ChatList from "../screens/ChatList";

const ChatNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="Chat" component={ChatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChatNavigation;

const styles = StyleSheet.create({});
