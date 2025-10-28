import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import login from "./pages/login";
import register from "./pages/register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "./pages/home";
import list from "./pages/list";

const AuthStack = createNativeStackNavigator();
const AppStack = createBottomTabNavigator();

export default function App() {
  const isLogged = true;

  return (
    <NavigationContainer>
      {isLogged ? (
        <AppStack.Navigator>
          <AppStack.Screen name="home" component={home} />
          <AppStack.Screen name="list" component={list} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="login" component={login} />
          <AuthStack.Screen name="register" component={register} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
