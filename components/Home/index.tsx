import { Button } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import HomeButton from "./components/HomeButton";

export default function Home() {
    const onPressAjudar = () => {
        alert('AJUDA AQUI MEU')
    }

    return (
        <>
            <HomeButton onPress={onPressAjudar} title="AJUDAR"/>    
        </>
    );
}