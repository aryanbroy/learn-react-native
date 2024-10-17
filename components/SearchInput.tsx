import { icons } from "@/constants";
import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchInput({
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: {
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  placeholder?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7B7B8B"}
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}
