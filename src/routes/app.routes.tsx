import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { NameScreen } from "../screens/Start/NameScreen";

const {Navigator , Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="NameScreen" component={NameScreen} />
    </Navigator>
  );
}
