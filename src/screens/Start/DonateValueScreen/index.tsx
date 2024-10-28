import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { globalStyle } from "../../../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import CurrencyInput from "react-native-currency-input";

export function DonateValueScreen() {
  const navigation = useNavigation();
  const [donateValue, setDonateValue] = useState<number | null>(0);

  function handleContinue() {
    navigation.navigate("debtScreen");
  }

  return (
    <SafeAreaView>
      <LinearGradient
        style={style.wrapper}
        colors={["#131313", "#2D143A"]}
        start={{ x: 1, y: 0.2 }}
      >
        <View style={style.container}>
          <Text style={[globalStyle.purpleText, style.title]}>
            Que incrível,{"\n"}Giovanne! 💜
          </Text>
          <Text style={globalStyle.text}>
          Tente nos informar uma{"\n"}estimativa fixa desse valor
          </Text>
          <View style={style.form}>
          <CurrencyInput
              value={donateValue}
              onChangeValue={setDonateValue}
              prefix="R$ "
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
              style={globalStyle.input}
              onChangeText={(formattedValue) => {
                console.log(formattedValue); // R$ +2.310,46
              }}
            />
            <TouchableOpacity
              style={[globalStyle.button, globalStyle.darkPurpleBG]}
              onPress={handleContinue}
            >
              <Text style={globalStyle.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
