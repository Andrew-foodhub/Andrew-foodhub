import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
//import {MaterialIcons} from '@expo/vector-icons';

export default function todoitem({item, deleteHandler}) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <View style={styles.order}>
        {/*<MaterialIcons name="delete" size={32} color="green" />*/}
        <Text > {item.fname}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  order: {
    padding: 10,
    marginTop: 5,
    borderColour: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    flexDirection: 'row',
  },
});
