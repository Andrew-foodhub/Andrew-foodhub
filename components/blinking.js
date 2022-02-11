import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

let inter;
export default class Blinking extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    this.state = {triggerCount: 0};
    this.switchFunction = this.switchFunction.bind(this);
    this.function1 = this.function1.bind(this);
    this.function2 = this.function2.bind(this);
  }

  function1() {
    inter = setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    }, 1000);
  }

  function2() {
    clearTimeout(inter);
    //this.state = {showText: true};
  }

  switchFunction() {
    switch (this.state.triggerCount) {
      case 0:
        this.function1();
        console.log(this.state.triggerCount);
        break;
      case 1:
        this.function2();
        console.log(this.state.triggerCount);
        break;
    }
    this.setState({
      triggerCount: (this.state.triggerCount + 1) % 2,
    });
  }

  render() {
    // <Navigator />;
    // let display = this.state.showText ?  this.props.text: ' ';
    let display = this.state.showText ? 'Blink' : ' ';

    return (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>
          {display}
        </Text>
        <Button
          title="do"
          onPress={() => {
            this.switchFunction();
          }}
        />

        {/*<View style={styles.container}>*/}
        {/*  /!*{/<TextInput>style={styles.input}</TextInput>/}*!/*/}
        {/*  /!*<Blinking text="blink" />*!/*/}
        {/*</View>*/}
        {/*<View style={{margin: 50}}>*/}
        {/*  /!*<Text>Home view</Text>*!/*/}
        {/*  <Button*/}
        {/*    title="next page"*/}
        {/*    onPress={() => this.props.navigation.navigate('log')}*/}

        {/*</View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
