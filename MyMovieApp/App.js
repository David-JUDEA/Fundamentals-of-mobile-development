import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import register from "./pages/Register";
import login from "./pages/Login";
import home from "./pages/Home";
import list from "./pages/List";

const AuthStack = createNativeStackNavigator();
const AppStack = createBottomTabNavigator();

export default function App() {
  const isLogged = true;

  return (
    <NavigationContainer>
      {isLogged ? (
        <AppStack.Navigator>
          <AppStack.Screen
            name="Home"
            component={home}
            options={{
              headerShown: true,
              headerTitle: "Home Page",
              headerStyle: {
                backgroundColor: "#948e8eff",
              },
            }}
          />
          <AppStack.Screen
            name="List"
            component={list}
            options={{
              headerShown: true,
              headerTitle: "Home Page",
              headerStyle: {
                backgroundColor: "#948e8eff",
              },
            }}
          />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={login}
            options={{
              headerShown: true,
              headerTitle: "Home Page",
              headerStyle: {
                backgroundColor: "#C30020",
              },
            }}
          />
          <AuthStack.Screen name="Register" component={register} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
