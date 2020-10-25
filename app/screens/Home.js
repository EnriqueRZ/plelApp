import React, { Component } from 'react';

import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import { Button } from 'react-native-elements';
import Hr from './components/Hr';
import SocialMediaIcons from './components/SocialMediaIcons';

export default class Home extends Component {
  state = {
    about: 'Para Leer en Libertad AC es un proyecto cultural de fomento a la lectura y de divulgación de la historia de México, '+
      'que está conformado por un grupo de promotores de lectura, cultura, historiadores y escritores que coinciden en la imperiosa'+
      'necesidad de colaborar en el proceso de hacer del pueblo de México un pueblo lector y que éste se acerque a su historia de '+
      'manera diferente a la tradicional y se apropie de ella. Tenemos la firme convicción de que un pueblo que lee, es un pueblo '+
      'que tiene la posibilidad de aprender de otras culturas, conocer nuevos horizontes, e intercambiar experiencias con otros países.',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Hr />
          <Text style={styles.title}>Para Leer En Libertad AC.</Text>
          <Hr />
          <Text style={styles.aboutText}>{this.state.about}</Text> 
          <SocialMediaIcons />
          <Image
            style={styles.image}
            source={require('../../assets/img/picture.jpg')}
          />
          <Button
            style={styles.buttonDetails}
            title="MÁS DETALLES"
            type="solid"
            onPress={() => {
              this.props.navigation.navigate('About');
            }}
          ></Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
  },

  image: {
		width: 400,
		height: 400,
    resizeMode: 'stretch',
    marginBottom: 20,
	},

  title : {
    color: "black",
    fontSize: 28,
    textAlign: "justify",
    paddingTop: 10,
  },
  
  aboutText: {
    fontSize: 18,
    textAlign: "justify",
    paddingTop: 5,
  },

  buttonDetails: {
    paddingTop: 20,
    marginBottom: 20,
  }
});