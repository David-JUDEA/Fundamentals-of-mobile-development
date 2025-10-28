import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './pages/login';
import register from './pages/register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    	<Stack.Navigator>
      		<Stack.Screen name="login" component={login} />
			<Stack.Screen name="register" component={register}/>
    	</Stack.Navigator>
    </NavigationContainer>
  );
}

