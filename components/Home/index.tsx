import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import HomeButton from "./components/HomeButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Home() {
  const logo = require("@/assets/images/Meau_marca.png");

  const onPressAjudar = () => {
    alert("AJUDA AQUI MEU");
  };

  return (
    <>
      <View  style={{ backgroundColor: "#fafafa", height: '90%'}}>
        <MaterialIcons name="menu" onPress={onPressAjudar} size={40} color="#88c9bf" style={{marginLeft: 12, marginBottom: 17}} />
          <Text
            style={{
              fontFamily: "Courgette-Regular",
              alignSelf: "center",
              fontSize: 72,
              color: "#ffd358",
              marginBottom: 50
            }}
          >
            Olá
          </Text>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 16,
              color: "#434343",
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
              width: 300,
              height: 90,
              marginBottom: 40
            }}
          >
            {
              "Bem vindo ao Meau!\nAqui você pode adotar, doar e ajudar cães e gatos comfacilidade.\nQual o seu interesse?"
            }
          </Text>
        <View style={{ alignSelf: "center", marginBottom: 44}}>
          <HomeButton
            onPress={onPressAjudar}
            title="ADOTAR"
            style={styles.button}
          />
          <HomeButton
            onPress={onPressAjudar}
            title="AJUDAR"
            style={styles.button}
          />
          <HomeButton
            onPress={onPressAjudar}
            title="CADASTRAR ANIMAL"
            style={styles.button}
          />
        </View>
      <Text style={{alignSelf: 'center', color: '#88C9BF', fontFamily: 'Roboto', fontSize: 16}}>
        login
      </Text>
      </View>
      <Image
        source={require("@/assets/images/Meau_marca_2.png")}
        style={{
          width: 140,
          height: 50,
          alignSelf: "center"
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffd358",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 13
  },
});
