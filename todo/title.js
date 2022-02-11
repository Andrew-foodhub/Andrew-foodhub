import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function onTitle() {
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>welcome</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    height: 50,
    paddingTop: 20,
    backgroundColor: '#f9c2ff',
  },
  title: {
    flex:1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    colour: '#fff',
  },
});
