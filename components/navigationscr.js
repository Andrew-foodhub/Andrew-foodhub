import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import blinking from './components/blinking';
import log from './components/log';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to blink"
        onPress={() => navigation.navigate('blinking')}
      />
      <View
        style={{
          padding: 40,
        }}>
        <Button title="Go to log" onPress={() => navigation.navigate('log')} />
      </View>
    </View>
  );
}

// function blinkingScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>blink Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="blinking" component={blinking} />
        <Stack.Screen name="log" component={log} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
