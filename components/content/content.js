import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import thumb from '../../image/cat.jpeg'

class Content extends Component {
  render() {
    return(
      <View style={style.mainContent}>
          <Item
            date="21년 10월 13일 14시 08분"
            content="무언가무언가를함"
          />          
      </View>
    );
  }
}

class Item extends Component {    
    constructor(props){
        super(props);
        this.state = {
          date: props.date,
          content: props.content
        }
    }
    render() {
        return(
            <View style={style.contetnList}>
                <View style={style.contentListImage}>
                    <Image
                        source={thumb}
                        resizeMode="center"
                        style={style.thumbImage}
                    />                
                </View> 
                <View style={style.contentListText}>
                    <Text>{this.state.content}</Text>
                    <Text>작성일 : {this.state.date}</Text>
                </View>
          </View>
        );
    }
}

const style = StyleSheet.create({
  mainContent : {      
      margin: 13
  },
  contetnList: {
      backgroundColor: "#eeeeee",
      flexDirection: 'row',
      height: 80,
      margin: 8,
      padding: 8
  },
  contentListImage: {
      flex: 2,      
      justifyContent: 'center',
      alignItems: 'center'
  },
  contentListText: {
      flex: 4,      
      padding: 5,
      justifyContent: 'space-between',
      backgroundColor: 'red'
  },
  thumbImage: {
      width: 98,
      height: 96
  }
});
export default Content;