import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginBottom:20}}>ABOUT SCREEN</Text>
        <Button 
        title='Home'
        onPress = {() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});