import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { globalStyle } from "../../../../globalStyles";
import { useNavigation } from "@react-navigation/native";

export function DonateScreen() {
  const navigation = useNavigation();

  function handleYes() {
    navigation.navigate("donateValueScreen");
  }

  function handleNo() {
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
          <Text style={globalStyle.text}>
            Você faz algum tipo de doação mensal?{"\n"}Seja para instituições de
            caridade,{"\n"}dízimo, ONGs etc?
          </Text>
          <View style={style.form}>
            <TouchableOpacity
              style={[globalStyle.button, globalStyle.purpleBG]}
              onPress={handleYes}
            >
              <Text style={globalStyle.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[globalStyle.button, globalStyle.darkPurpleBG]}
              onPress={handleNo}
            >
              <Text style={globalStyle.buttonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
