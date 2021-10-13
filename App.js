import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header/header';

class App extends Component {
  render() {
    return(
      <View style={style.mainView}>
        <Header/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView : {
    backgroundColor: "#6ed8ff",
    flex: 1,
    paddingTop: 53    
  }
});
export default App;