import React from 'react';

import {

  StyleSheet,
  Text,

  View,
} from 'react-native';



// Map Screen Component
function MapScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text>Map Screen</Text>
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


  export default MapScreen;
