import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blinking extends Component {
   constructor(props) {
     super(props)
      this.state = { showText: true };  

      setInterval( this.flipValue.bind(this), 1000);
   }
   flipValue() {
     this.setState( (previousState) => {
        return {showText : !previousState.showText};
     })
   }

   render() {
     let text = this.state.showText ? this.props.text : 'nothing'
     return <Text>{text}</Text>
     //return <Text>{this.props.text}</Text>
   }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Greeting name='Pablo'/>
         <Greeting name='Valeria'/>
         <Blinking text="Blinking!"/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
