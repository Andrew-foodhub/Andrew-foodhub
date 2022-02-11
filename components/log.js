import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Adds extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  incrementCount() {
    //console.log('inc');
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrementCount() {
    //console.log('dec');
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}} />
        <Button
          title="add"
          onPress={() => {
            this.incrementCount();
          }}
        />
        <Text Style={{fontSize: 20}}>{this.state.count}</Text>

        <Button
          title="minus"
          onPress={() => {
            this.decrementCount();
          }}
        />
        {/*<View style={{margin: 50}}>*/}
        {/*  <Button*/}
        {/*    title="next page"*/}
        {/*    onPress={() => this.props.navigation.navigate('Blinking')}*/}
        {/*    Blinking*/}
        {/*  />*/}
        {/*</View>*/}
      </View>
    );
  }
}
//   nextScr(navigation) {
//     return (
//       <View style={{margin: 50}}>
//         <Button
//           title="next page"
//           onPress={() => navigation.navigate('Blinking')}
//         />
//       </View>
//     );
//   }
// }
