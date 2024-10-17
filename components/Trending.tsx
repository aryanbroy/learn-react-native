import { FlatList, Text, View } from "react-native";
import React from "react";

export default function Trending({ posts }: { posts: { id: number }[] }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
}
