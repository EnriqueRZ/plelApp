import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Hr from './components/Hr';
import TarascoCard from './components/TarascoCard';
import HTMLView from 'react-native-htmlview';
import SocialMediaIcons from './components/SocialMediaIcons';
import axios from 'axios';

export default class About extends Component {
  state = {
    description: '',
  }

  async getData() {
    const response = await axios.get(`https://docs.brigadaparaleerenlibertad.com/programs/identifier/quienes-somos`);
    
    this.setState({
      description: response.data.data.description
    });
  }

  componentDidMount() {
    if(this.state.description === '') this.getData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Hr />
          <Text style={styles.title}>Quienes Somos</Text>
          <Hr />
          <HTMLView
            value={this.state.description}
          />
          <SocialMediaIcons />
          <TarascoCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
  },

  title : {
    color: "black",
    fontSize: 28,
    textAlign: "justify",
    paddingTop: 10,
  },
});