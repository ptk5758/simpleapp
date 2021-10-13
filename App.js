import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header/header';
import Content from './components/content/content';
import Insert from './components/insert/insert';

class App extends Component {
  render() {
    return(
      <View style={style.mainView}>
        <Header/>
        <Content/>
        <Insert/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView : {
    backgroundColor: "#6ed8ff",
    flex: 1,
    paddingTop: 53,
    paddingBottom:30
  }
});
export default App;