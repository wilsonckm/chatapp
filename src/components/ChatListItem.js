import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function ChatListItem({ chat }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View>
          <View style={styles.row}>
            <Text style={styles.name}> {chat.user.name} </Text>
            <Text>{dayjs(chat.lastMessage.createdAt).fromNow()} </Text>
          </View>

          <View>
            <Text style={styles.subTitle}>{chat.lastMessage.text} </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },

  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },

  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  row: {
    flexDirection: "row",
    marginBottom: 5,
  },

  name: {
    fontWeight: "bold",
    flex: 1,
  },

  subTitle: {
    color: "grey",
  },
});
