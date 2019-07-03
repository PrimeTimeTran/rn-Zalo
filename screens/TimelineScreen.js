import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimelineScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Timeline Screen</Text>
    </View>
  );
};

TimelineScreen.navigationOptions = {
  title: 'Timeline'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
