import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import register from "./pages/Register";
import Login from "./pages/Login";
import home from "./pages/Home";
import list from "./pages/List";

const AuthStack = createNativeStackNavigator();
const AppStack = createBottomTabNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <NavigationContainer>
      {isLogged ? (
        <AppStack.Navigator>
          <AppStack.Screen
            name="Home"
            component={home}
            options={{
              headerShown: true,
              headerTitle: "Home",
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
              headerTitle: "List",
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
            children={(props) => <Login {...props} setIsLogged={setIsLogged} />}
            options={{
              headerShown: true,
              headerTitle: "Login",
              headerStyle: {
                backgroundColor: "#C30020",
              },
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={register}
            options={{
              headerShown: true,
              headerTitle: "Register",
              headerStyle: {
                backgroundColor: "#948e8eff",
              },
            }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
