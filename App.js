import React from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

import firebase from 'react-native-firebase'

firebase.firestore().settings({
  persistence: true
})
  const id = "1*090023";
export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }


  // reload() {
  //   firebase.firestore().collection('reference1').doc('default').collection('account').doc(id).get()
  //           .then(dd => {
  //             debugger
  //           })

  //           firebase.firestore().collection('reference').doc('default').collection('account').doc(id).get()
  //           .then(dd => {
  //             debugger
  //           })
  // }

  addText() {
 
    debugger;
  //  firebase.firestore().goOffline();
 const  t =  firebase.firestore(); 

//  firebase.firestore().collection('reference1').doc('default').collection('account').doc('1*102982')
//     .onSnapshot(function(doc) {
//         console.warn("Current data: ", doc.data());
//     });

    firebase.firestore().collection('reference1').doc('default').collection('account').get().then(snapshot => {
      console.warn(snapshot._docs.length);
      debugger;


      // firebase.firestore().collection('reference1').doc('default').collection('account').doc('1*102982').get()
      // .then((doc) => {
      //   debugger;
      //   console.warn(doc)
      // }

    
    // const data = snapshot.data();
      // debugger
      // firebase.firestore().collection('reference1').doc('default').collection('account').doc(id).delete()
      //   .then(() => {
      //     debugger;
      //   })
      //   .catch(e => {
      //     firebase.firestore().collection('reference1').doc('default').collection('account').doc(id).get({ source: 'cache' })
      //       .then(dd => {
      //         debugger
      //       })
      //   });
    });
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
        <Button
          title={'Reload'}
          onPress={() => this.reload()} />
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
