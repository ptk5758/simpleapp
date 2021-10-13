import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return(
      <View style={style.mainHeader}>
        <Text style={style.headerFont}>
            로고
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainHeader : {
      padding: 10,
      marginLeft: 13,
      marginRight: 13,
      flex: 1
  },
  headerFont: {
      fontSize: 20,
      color: '#ffffff',
      fontWeight: 'bold'
  }
});
export default Header;