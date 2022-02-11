import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Title from './todo/title';
import Item from './todo/deleteitem';
import AddName from './todo/addName';

export default function form() {
  const [name, setName] = useState([
    {fname: 'andrew', key: '1'},
    {fname: 'andrew joel', key: '2'},
  ]);

  const deleteHandler = key => {
    setName(prevName => {
      return prevName.filter(name => name.key != key);
    });
  };
  const buttonPress = text => {
    if (text.length > 3) {
      setName(prevName => {
        return [{fname: text, key: Math.random().toString()}, ...prevName];
      });
    } else {
      Alert.alert('error!', 'char must be lest 3 long', [
        {text: 'ok', onPress: () => console.log('Ask me later pressed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Title />
        <View style={styles.content}>
          <View style={styles.list}>
            <AddName buttonPress={buttonPress} />
            <FlatList
              data={name}
              renderItem={({item}) => (
                // <Text style={styles.list}> {item.fname} </Text>
                <Item item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 90,
  },
});
