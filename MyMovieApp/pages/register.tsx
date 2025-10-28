import { Button, StyleSheet, Text, View } from 'react-native';

export default function register() {
  return (
	<View style={styles.container}>
	  <Text>register</Text>
	  <Button title="Se connecter" onPress={() :void => {}} />
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
