import React from 'react';
import {TouchableOpacity} from 'react-native';

// react-navigation
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

// importing screens
import Home from './app/screens/Home';
import About from './app/screens/About';
import Splash from './app/screens/Splash';
import Books from './app/screens/Books';

const HomeNavigator = createStackNavigator(
  {
    'Home': {screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="indent" size={25} />
        </TouchableOpacity>
      )
    })},
    'About': {screen: About,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="indent" size={25} />
          </TouchableOpacity>
        )
      })},
  },
  {
    initialRouteName : 'Home'
  }
);

const DrawerNavigator = createDrawerNavigator({
  'Home': {
    navigationOptions: {
      drawerLabel: 'Home',
    },
    screen: HomeNavigator,
  },

  'About': {
    navigationOptions: {
      drawerLabel: 'Acerca de',
    },
    screen: HomeNavigator,
  }
},{
  initialRouteName : "Home"
});


const AppSwitchNavigator = createSwitchNavigator({
  'Splash' : {screen : Splash},
  'Drawer' : {screen : DrawerNavigator}
},
{
  initialRouteName : 'Splash'
})

const App = createAppContainer(AppSwitchNavigator);

export default App;
/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, BackHandler} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require('./assets/img/logo.jpg')}
        />
      </View>
      <View>
        <Text
          style={styles.text}>
          Tarasco Labs
        </Text>
      </View> 
    </View> 
   
  )};

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
  },
  stretch: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
  text: {
    textAlign: "center",	
    fontWeight: "bold",
    paddingTop: 100,
  }
});
*/

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
