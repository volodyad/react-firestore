import React from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

import firebase from 'react-native-firebase'

firebase.firestore().settings({
  persistence: true
})

export default class App extends React.Component {
  constructor() {
    super()
    this.ref = firebase.firestore().collection('test')
    this.state = {
      text: ''
    }
  }

  addText() {
    debugger;
    this.ref.add({
      text: this.state.text,
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.text}
          onChangeText={(text) => {
            this.setState({ text: text })
          }}
        />
        <Button
          title={'Add Text1'}
          onPress={() => this.addText()} />
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
  textinput: {
    width: '100%',
  },
});
