import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return(
      <View style={style.mainHeader}>
        <Text style={style.headerFont}>해더이다</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainHeader : {
    
  },
  headerFont: {
      fontSize: 20,
      color: '#ffffff',
      fontWeight: 'bold'
  }
});
export default Header;