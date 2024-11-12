import { View, StyleSheet } from "react-native";
import Header from "../Header";
import {FormLogin, PasswordInput, UsernameInput} from "./components/Form";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        <Header text="Login" textColor="#434343" backgroundColor="#88c9bf"/>
        <View style={styles.formContainer}>
            <FormLogin username={username} password={password} setUsername={setUsername} setPassword={setPassword}></FormLogin>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: "5%",
        marginTop: "10%"
    }
})