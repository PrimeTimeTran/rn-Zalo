import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Contacts Screen</Text>
    </View>
  );
};

ContactsScreen.navigationOptions = {
  title: 'Contacts'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
