import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const onPressAjudar = () => {
    alert("AJUDA AQUI MEU");
  };

interface Props {
    text?: string;
    textColor: string;
    backgroundColor: string;
}  

export default function Header({text, textColor, backgroundColor}: Props) {
  useEffect(() => {}, []);

  return (
    <View style={[stylesHeaderCorrente.header, {backgroundColor: backgroundColor}]}>
        <MaterialIcons name="menu" onPress={onPressAjudar} size={24} color={textColor} style={[stylesHeaderCorrente.icon]} />
      <Text style={[stylesHeaderCorrente.text, {color: textColor}]}>{text ? text : 'Deu ruim'}</Text>
    </View>
  );
}

const stylesHeaderCorrente = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  text: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Roboto-Medium",
  },
  icon: {
    marginLeft: 16,
    marginTop: 16,
    marginBottom:16
  },
});