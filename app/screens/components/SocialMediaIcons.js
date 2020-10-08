import React, {Component} from 'react';

import {
  Linking,
  View,
  StyleSheet,
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

export default class SocialMediaIcons extends Component {

  render() {
    var urlTwitter = 'https://twitter.com/BRIGADACULTURAL';
    var urlFacebook = 'https://facebook.com/BrigadaParaLeerEnLibertad';
		var urlYoutube = 'https://www.youtube.com/channel/UCeU3saK2bIbuxYEfyQIK5iQ'; 
		var urlGmail = 'mailto:paraleerenlibertad@gmail.com';
    return (
			<View style={styles.containerMedia}>
				<SocialIcon
					type='twitter'
					style={styles.icon}
					onPress={() => {
						Linking.openURL(urlTwitter);
					}}
				/>
				<SocialIcon
					type='facebook'
					style={styles.icon}
					onPress={() => {
						Linking.openURL(urlFacebook);
					}}
				/>
				<SocialIcon
					type='youtube'
					style={styles.icon}
					onPress={() => {
						Linking.openURL(urlYoutube);
					}}
				/>
				<SocialIcon
					type='google'
					style={styles.icon}
					onPress={() => {
						Linking.openURL(urlGmail);
					}}
				/>
			</View>
    );
  }
};

const styles = StyleSheet.create({
	containerMedia : {
		flex: 1, 
		flexDirection: 'row',
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
	},

	icon : {
		marginLeft: 10,
		marginRight: 10,
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
  }
});