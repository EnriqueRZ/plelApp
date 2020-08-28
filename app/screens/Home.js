import React, {Component} from 'react';

import {
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize : 25, marginBottom : 20}}>HOME SCREEN</Text>
                <Text>FACEBOOK</Text>
                <Text>YOUTUBE</Text>
                <Text>TUISTES</Text>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});