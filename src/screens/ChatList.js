import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatListItem from "../components/ChatListItem";
import chats from "../../assets/data/chats.json";

export default function ChatList() {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
}

const styles = StyleSheet.create({});
