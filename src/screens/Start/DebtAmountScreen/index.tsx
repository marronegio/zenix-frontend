import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { globalStyle } from "../../../../globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import CurrencyInput from "react-native-currency-input";

export function DebtAmountScreen() {
  const navigation = useNavigation();
  const [debtValue, setDebtValue] = useState<number | null>(0);
  function handleNextStep() {
    navigation.navigate("donateScreen");
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
          Tudo bem,{"\n"}Giovanne!
          </Text>
          <Text style={globalStyle.text}>
            Com uma boa organização financeira você vai se livrar dessa(s)
            dívida(s) tranquilamente!
            {"\n"}{"\n"}
            Agora, qual é o valor total de suas dívidas?
          </Text>
          <View style={style.form}>
            <CurrencyInput
              value={debtValue}
              onChangeValue={setDebtValue}
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
              onPress={handleNextStep}
            >
              <Text style={globalStyle.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
