import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default function addNames({buttonPress}) {
  const [text, setText] = useState('');
  const changeHandler = txt => {
    setText(txt);
  };

  return (
    <View>
      <TextInput
        style={styles.txtInput}
        placeholder={'type here...'}
        onChangeText={changeHandler}
      />
      <Button title={'To Add'} onPress={() => buttonPress(text)} />
    </View>
  );
}
const styles = StyleSheet.create({
  txtInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
