import React, { Component } from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';

export default class Splash extends Component {
  state = {
    books: {},
    _isMounted: false,
  };
	
  componentDidMount() {
    this._isMounted = true;
    const data = this.navigateToHome();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  navigateToHome = async () => {
    const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
    return wait(3000).then(() => this.props.navigation.navigate('Home'))
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image 
            style={styles.stretch}
            source={require('../../assets/img/logoSplash.jpg')}
          />
        </View>
        <View style={styles.containerTarasco}>
          <Image
            style={styles.imageTarasco}
            source={require('../../assets/img/logoTarasco.png')}
          />
        </View> 
      </SafeAreaView> 
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  stretch: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
  containerTarasco: {
    paddingTop: 120,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageTarasco: {
    width: 150,
    height: 31,
  }
});
