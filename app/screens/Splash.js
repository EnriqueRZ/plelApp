import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';

export default class Splash extends Component {
    _isMounted = false;

    state = {
        books: {}
    };
    
    componentDidMount() {
        this._isMounted = true;
        // You can load api data or any other thing here if you want
        /*
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
        */
        const data = this.navigateToHome();
        //console.log(this.state);
            //if (data !== null) {
                //console.log('nop');
        
            //}
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(3000).then(() => this.props.navigation.navigate('Home'))
    };

    render() {
        return (
            <SafeAreaView style={styles.container} style={styles.container}>
                <View>
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
            </SafeAreaView> 
        );
    }
};

const styles = StyleSheet.create({
    container: {
        //paddingTop: 150,
        flex : 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white'
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