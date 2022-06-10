/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import WalletConnect from "@walletconnect/client";


const App = () => {

  const btnPressAtn = () => {
    console.log("Press me");
  }

  return (
    <SafeAreaView>
      <View style={styles.outerContainer}>

        <Text>This ia demo project</Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={btnPressAtn}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20
  },

  buttonStyle: {
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 12,
  },
  
  buttonText: {
    fontSize: 16,
    color : 'white',
    fontWeight: 'bold',
    textAlign : 'center'
  },
  
});

export default App;
