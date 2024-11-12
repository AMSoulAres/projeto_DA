import BaseButton from "@/components/BaseButton";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { GestureResponderEvent, StyleSheet, TextInput, View, Text } from "react-native";

interface InputProps {
  onChangeText?: (text: string) => void;
  value?: string
  style?: any;
}

interface FormProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (senha: string) => void;
  onSubmit?: (event: GestureResponderEvent) => void;
}
export function FormLogin(props: FormProps) {
  return (
    <View style={styles.container}>
      <UsernameInput onChangeText={props.setUsername} value={props.username}/>
      <PasswordInput onChangeText={props.setPassword} value={props.password}/>
      <BaseButton title="ENTRAR" style={styles.buttonEntrar} onPress={props.onSubmit}/>
      <BaseButton style={{backgroundColor: '#f15f5c', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 8, alignSelf: "center"}}>
      <Entypo name="google-" size={24} color="#fafafa" />
      <Text style={{color: '#fafafa', fontSize: 12}}>ENTRAR COM GOOGLE</Text>
      </BaseButton>
      <BaseButton style={{backgroundColor: '#194f7c', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'center'}}>
      <AntDesign name="facebook-square" size={24} color="#fafafa" />
      <Text style={{color: '#fafafa', fontSize: 12}}>ENTRAR COM FACEBOOK</Text>
      </BaseButton>
    </View>
  );
}

export function UsernameInput(props: InputProps) {
  const [onFocus, setFocus] = useState(false);
  
  return (
    <View style={styles.containerInputs}>
      <TextInput
        value={props.value}
        style={onFocus ? styles.inputFocused : styles.input}
        placeholderTextColor="#bdbdbd"
        placeholder="Nome de Usuário"
        keyboardType="default"
        enablesReturnKeyAutomatically
        onChangeText={props.onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <View style={onFocus ? styles.underlineFocused : styles.underline}/>
    </View>
  );
}
export function PasswordInput(props: InputProps) {
  const [onFocus, setFocus] = useState(false);

  return (
    <View style={styles.containerInputs}>
      <TextInput
        value={props.value}
        style={onFocus ? styles.inputFocused : styles.input}
        placeholderTextColor="#bdbdbd"
        placeholder="Senha"
        keyboardType="numeric"
        secureTextEntry={true}
        enablesReturnKeyAutomatically
        onChangeText={props.onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <View style={onFocus ? styles.underlineFocused : styles.underline}/>
    </View>
  );
}

const styles = StyleSheet.create({
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 1,
    width: '100%',
    backgroundColor: '#bdbdbd',
    // transform: 'scaleX(0)',
    // transformOrigin: 'center'
  },
  input: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    backgroundColor: "transparent",
  },
  underlineFocused: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    backgroundColor: "#88c9bf",
  },
  inputFocused: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    backgroundColor: "transparent",
    color: "#434343"
  },
  buttonEntrar: {
    backgroundColor: '#88c9bf',
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    marginTop: 52,
    alignSelf: 'center',
    marginBottom: 72
  },
  containerInputs: {
    marginTop: 20,
    paddingVertical:8,
    paddingHorizontal: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});