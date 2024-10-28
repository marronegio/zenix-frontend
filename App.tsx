import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Login } from "./src/screens/Login";

import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NameScreen } from "./src/screens/Start/NameScreen";
import { MonthlyIncomeScreen } from "./src/screens/Start/MonthlyIncomeScreen";
import { DonateScreen } from "./src/screens/Start/DonateScreen";
import { DonateValueScreen } from "./src/screens/Start/DonateValueScreen";
import { DebtScreen } from "./src/screens/Start/DebtScreen";
import { DebtAmountScreen } from "./src/screens/Start/DebtAmountScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="nameScreen" component={NameScreen} />
        <Stack.Screen name="monthlyIncomeScreen" component={MonthlyIncomeScreen} />
        <Stack.Screen name="donateScreen" component={DonateScreen} />
        <Stack.Screen name="donateValueScreen" component={DonateValueScreen} />
        <Stack.Screen name="debtScreen" component={DebtScreen} />
        <Stack.Screen name="debtAmountScreen" component={DebtAmountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
