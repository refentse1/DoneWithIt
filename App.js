import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Button } from 'react-native';

export default function App() {
  const handlePress = ()=> alert("Clicked")
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title='Click me'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
});
