import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [counter, setCounter] = useState(0);

  return (

    <View style={{ flex: 1, padding: 20 }}>

      <Button
        title='Go To ListView'
        onPress={() => { navigation.navigate("List View") }}
      />
      <View style={{ marginTop: 10 }}></View>

      <Button
        title='Increase Counter'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <View style={{ marginTop: 10 }}></View>
      <Button
        title='Decrease counter'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={{ marginBottom: 20, }}> Counter value: {counter}</Text>

    </View>



  );
}
