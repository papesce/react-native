import React, {Component} from 'react';
import { Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  StyleSheet, Text, View, TextInput, Button } from 'react-native';







export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  _onLongPressButton() {
    Alert.alert('You long press button');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="blue">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Hihloght</Text>
          </View>  
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Opacity</Text>
          </View>  
        </TouchableOpacity>
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
  },
   buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
