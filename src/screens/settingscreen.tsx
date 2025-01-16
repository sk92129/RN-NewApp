import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


// Settings Screen Component
function SettingsScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


  export default SettingsScreen;
