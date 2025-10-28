import { Button, StyleSheet, Text, View } from 'react-native';

export default function register({navigation}) {
  return (
	<View style={styles.container}>
	  <Text>register</Text>
	  <Button title="Se connecter" onPress={() :void => {navigation.navigate("login")}} />
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
