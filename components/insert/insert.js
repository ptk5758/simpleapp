import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Insert extends Component {
    state = {
        inputText : "default",
        buttonTitle: "SEND"
    }
  render() {
    return(
      <View style={style.mainInsert}>
          <View>
            <View>
                <TextInput
                    style={style.insertInput}
                    value={this.state.inputText}
                />
            </View>
            <View>
                <Button
                    title={this.state.buttonTitle}
                />
            </View>
          </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainInsert : {
      backgroundColor: 'red',
      flex: 2,
      padding: 8
  },
  insertInput: {
      backgroundColor: "#eeeeee"
  }
});
export default Insert;