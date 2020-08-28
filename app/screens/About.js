import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginBottom:20}}>ACERCA DE SCREEN</Text>
        <Button 
        title='Home'
        onPress = {() => this.props.navigation.navigate('Home')}
        />
        <Text>ALGO CHIDO POR AQUI</Text>
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