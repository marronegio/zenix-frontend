import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { globalStyle } from "../../../../globalStyles";
import { useNavigation } from "@react-navigation/native";

export function DebtScreen() {
  const navigation = useNavigation();

  function handleYes() {
    navigation.navigate("debtAmountScreen");
  }

  function handleNo() {
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
          <Text style={globalStyle.text}>
            Certo Giovanne, agora uma{"\n"}coisa bem importante:{"\n"}você possui dívidas?
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
