import { View, Text } from "react-native";
import HomeButton from "./components/HomeButton";

export default function Home() {
  const onPressAjudar = () => {
    alert("AJUDA AQUI MEU");
  };

  return (
    <>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: 300,
          height: 90,
        }}
      >
        <Text style={{ fontFamily: "Roboto", fontSize: 16, justifyContent: 'space-between' }}>
          Bem vindo ao Meau!
          Aqui você pode adotar, doar e ajudar
          cães e gatos comfacilidade.
          Qual o seu interesse?
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <HomeButton
          onPress={onPressAjudar}
          title="ADOTAR"
          style={{ backgroundColor: "#ffd358" }}
        />
        <HomeButton
          onPress={onPressAjudar}
          title="AJUDAR"
          style={{ backgroundColor: "#ffd358" }}
        />
        <HomeButton
          onPress={onPressAjudar}
          title="CADASTRA ANIMAL"
          style={{ backgroundColor: "#ffd358" }}
        />
      </View>
    </>
  );
}
