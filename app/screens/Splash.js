import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import axios from 'axios';

export default class Splash extends Component {
    _isMounted = false;

    state = {
        books: {}
    };
    
    componentDidMount() {
        this._isMounted = true;
        // You can load api data or any other thing here if you want
        axios.get(`https://docs.brigadaparaleerenlibertad.com/books?page=1`)
        .then(res => {
            var book = {};
            book = res.data;
            //console.log((res.data));
            if (this._isMounted) {
                this.setState({ books: res.data });
                this.props.navigation.navigate('Home', { books : book });
            }
        })
        //const data = await this.navigateToHome();
        //console.log(this.state);
            //if (data !== null) {
                //console.log('nop');
        
            //}
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    navigateToHome = async () => {
        // Splash screen will remain visible for 2 seconds
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => this.props.navigation.navigate('Home', {books: this.state}))
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image
                    style={styles.stretch}
                    source={require('../../assets/img/logo.jpg')}
                    />
                </View>
                <View>
                    <Text
                    style={styles.text}>
                    Tarasco Labs
                    </Text>
                </View> 
            </View> 
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
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