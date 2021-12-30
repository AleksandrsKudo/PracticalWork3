import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';




export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
     
      </Text>
      <Button  
      title ="Go to List view"
      onPress={()=> {navigation.navigate("List View" )} }> 

      </Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
=======
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
