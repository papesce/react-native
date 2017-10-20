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
      <View >
        <View style={{flex: 1, backgroundColor: 'lightblue'}}/>
      </View>
    );
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Greeting name='Pablo'/>
         <Greeting name='Valeria'/>
        <LotsOfStyles/>
        <Text>Open up App.js to start working on your app!</Text>
        <FixedDimensionsBasics/>
        <FlexDimensionsBasics/>
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
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
  }
});
