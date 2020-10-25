import React from 'react';

import {
  Linking,
  View,
  StyleSheet,
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

const SocialMediaIcons = () => {
  const urlTwitter = 'https://twitter.com/BRIGADACULTURAL';
  const urlFacebook = 'https://facebook.com/BrigadaParaLeerEnLibertad';
  const urlYoutube = 'https://www.youtube.com/channel/UCeU3saK2bIbuxYEfyQIK5iQ';
  const urlGmail = 'mailto:paraleerenlibertad@gmail.com';
  const urlInstagram = 'https://www.instagram.com/brigadacultural/';
  return (
    <View style={styles.containerMedia}>
      <SocialIcon
        type="twitter"
        style={styles.icon}
        onPress={() => {
          Linking.openURL(urlTwitter);
        }}
      />
      <SocialIcon
        type="facebook"
        style={styles.icon}
        onPress={() => {
          Linking.openURL(urlFacebook);
        }}
      />
      <SocialIcon
        type="youtube"
        style={styles.icon}
        onPress={() => {
          Linking.openURL(urlYoutube);
        }}
      />
      <SocialIcon
        type="instagram"
        style={styles.icon}
        onPress={() => {
          Linking.openURL(urlInstagram);
        }}
      />
      <SocialIcon
        type="google"
        style={styles.icon}
        onPress={() => {
          Linking.openURL(urlGmail);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMedia: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default SocialMediaIcons;
