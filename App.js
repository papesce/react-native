import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


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

class LotsOfStyles extends Component {
    render() {
      return (<View>
            <Text style={styles.red}> just red</Text>  
        </View>
      );
    }
}

class FixedDimensionsBasics extends Component {
  render() {
    return  (
      <View>
        <View style={{width:50, height:50, backgroundColor: 'skyblue'}}>
        </View>
      </View>
    );
  }
} 

class FlexDimensionsBasics extends Component {
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',
      alignItems: 'baseline'}}>
        <View style={{width:50, height:50, backgroundColor: 'lightblue'}}/>
         <View style={{width:50, height:50, backgroundColor: 'blue', marginBottom: 20}}/>
          <View style={{width:50, height:50, backgroundColor: 'lightblue'}}/>
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "nothing typed"};
  }
  render() {
    return (<View>
         <Text>{this.state.text}</Text>
         <TextInput style={{height:40}} 
         placeholder="Type here to translate!"
         onChangeText={this.textChanged.bind(this)}/>
    </View>);
  }
  textChanged(text) {
    let text2 = text.split(' ').map( (word) => {  
      return 'pizza';
    }).join(' ');
    this.setState({text: text2})
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <PizzaTranslator/>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
  }
});
