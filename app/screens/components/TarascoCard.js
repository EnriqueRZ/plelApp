import React from 'react';

import {
  Linking,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Card,
  Button,
} from 'react-native-elements';

const TarascoCard = () => {
  const urlTarascoLabs = 'https://tarasco-labs-f2951.web.app/';

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>DESARROLLADORES</Card.Title>
        <Card.Image
          source={require('../../../assets/img/logoTarasco.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>
          Aplicación desarrollada por Tarasco Labs con respositorio de código abierto
          para consultas, sugerencias y oponiniones.
        </Text>
        <Button
          buttonStyle={styles.buttonStyle}
          title="CONOCENOS"
          onPress={() => {
            Linking.openURL(urlTarascoLabs);
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 5,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  imageStyle: {
    height: 31,
    width: 150,
    alignItems: 'center',
    alignContent: 'center',
  },
  imageContainer: {
    height: 31,
    width: '100%',
    alignContent: 'center',
  },
});

export default TarascoCard;
