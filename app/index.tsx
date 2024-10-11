import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-red-500 font-pblack">Hello there</Text>
      <Link href={"/home"} className="text-blue-500">
        Go to home
      </Link>
    </View>
  );
}
