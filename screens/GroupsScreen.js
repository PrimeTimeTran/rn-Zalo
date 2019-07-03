import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GroupsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Groups Screen</Text>
    </View>
  );
};

GroupsScreen.navigationOptions = {
  title: 'Groups'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
