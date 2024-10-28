import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyle } from "../../../globalStyles";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate("nameScreen");
  }

  return (
    <SafeAreaView style={style.wrapper}>
      <LinearGradient
        style={style.wrapper}
        colors={["#131313", "#2D143A"]}
        start={{ x: 1, y: 0.2 }}
      >
        <View style={style.container}>
          <Text style={[globalStyle.purpleText, style.loginTitle]}>Zenix</Text>
          <Text style={[globalStyle.text, style.text]}>Controle total, simplificado</Text>
          <View style={style.form}>
            <TextInput
              style={globalStyle.input}
              placeholder="E-mail"
              placeholderTextColor="#b1b1b1"
              keyboardType="email-address"
            />
            <TextInput
              style={globalStyle.input}
              placeholder="Senha"
              placeholderTextColor="#898989"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={[globalStyle.button, globalStyle.purpleBG]}
              onPress={handleLogin}
            >
              <Text style={globalStyle.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={style.createAccount}>
            <Text style={globalStyle.text}>Não tem uma conta?</Text>
            <TouchableOpacity style={[style.button, globalStyle.purpleBG]}>
              <Text style={globalStyle.smallerButtonText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
