import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoreScreen(props) {
  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
    </View>
  );
};

MoreScreen.navigationOptions = {
  title: 'More'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
