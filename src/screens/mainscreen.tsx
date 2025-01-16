import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Main Screen Component
function MainScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text>Main Screen</Text>
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


  export default MainScreen;
