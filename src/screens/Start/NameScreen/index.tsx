import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { globalStyle } from "../../../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export function NameScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState<string>("")

  function handleNextStep() {
    navigation.navigate("monthlyIncomeScreen");
  }

  function setNameState(text: string) {
    setName(text)
  }

  return (
    <SafeAreaView>
      <LinearGradient
        style={style.wrapper}
        colors={["#131313", "#2D143A"]}
        start={{ x: 1, y: 0.2 }}
      >
        <View style={style.container}>
          <Text style={globalStyle.text}>☝️ Antes de qualquer coisa...</Text>
          <Text style={[globalStyle.purpleText, style.title]}>
            Qual é o seu nome?
          </Text>
          <View style={style.form}>
            <TextInput style={globalStyle.input} keyboardType="default" value={name} onChangeText={setNameState} />
            <TouchableOpacity
              style={[globalStyle.button, globalStyle.darkPurpleBG]}
              onPress={handleNextStep}
            >
              <Text style={globalStyle.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
