import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
// import './assets/css/style.css';



export default function HomeScreen({ navigation }) {
  return (
 <View style={styles.container}>
      <Text style={styles.titleTextLarge}>
          Sign in
      </Text>
      <Text style={styles.inputTitleText}>
          Email
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={"my.name@email.com"}
      />
      <Text style={styles.inputTitleText}>
          Password
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={"●●●●●●●●"}
      />
      <Text style={styles.titleSubtextSmall}>
          Forgot password
      </Text>
      <Pressable style={styles.buttonSignIn} onPress={() => { navigation.navigate("List View") }}>
        <Text style={styles.buttonTextLight}>Sign in</Text>
      </Pressable>
      <Pressable style={styles.buttonSignUp} onPress={() => { navigation.navigate("List View") }}>
        <Text style={styles.buttonTextDark}>Sign up</Text>
      </Pressable>
      <Pressable style={styles.buttonOffline} onPress={() => { navigation.navigate("List View") }}>
        <Text style={styles.buttonTextDark}>Offline</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '2em',
  },
  inputStyle:{
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: '1.5vh',
    borderBottom: '2px solid #1C6EA4',
    width: 'auto',
    outline: 'none',
  },
  inputTitleText:{
    fontFamily: 'Lato',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '14px',
    letterSpacing: '0.04em',
    textAlign: 'left',
    color: '#548FBA',
  },
  buttonTextLight: {
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19px',
    margin: 'auto',
    color: '#FFFFFF',
  },
  buttonTextDark: {
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19px',
    margin: 'auto',
    color: '#548FBA',
  },
  buttonSignIn: {
    background: '#3E658A',
    borderRadius: '45px',
    width: '192px',
    height: '37px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSignUp:{
    background: '#FFFFFF',
    borderRadius: '45px',
    width: '122px',
    height: '37px',
    marginRight: 'auto',
  },
  buttonOffline:{
    background: '#FFFFFF',
    borderRadius: '45px',
    width: '122px',
    height: '37px',
    marginLeft: 'auto',
  },
  titleTextLarge:{
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '38px',
    textAlign: 'center',
    letterSpacing: '0.15em',
    position: 'relative',
    width: "100%",
    height: 'auto',
    padding: 'auto',
    color: '#548FBA',
  },
  titleSubtextSmall:{
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '14px',
    textAlign: 'center',
    position: 'relative',
    height: 'auto',
    color: '#929292',
    marginRight: 'auto',

  },
});