import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView, FlatList} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title : "Libros"
    }

    footer = () => {
        return(
        <View style={styles.headerStyle}>
          <Text style={styles.titleStyle}>This is the footer</Text>
        </View>);
    }

    item = ({ item }) => {
        
    }

    render() {
        var urlImg = 'https://brigadaparaleerenlibertad.com/documents/public/img/img_books/';
        const { navigation } = this.props;
        var data = navigation.getParam('books');
        data = data.data['data'];
        return (
            <View style={{ flex: 1.0 }}>
                <FlatList 
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={data}
                numColumns={2}
                keyExtractor={item => item.id}
                ListFooterComponent={this.footer}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white', width: '50%', height:200, margin: 2}}>
                        <Image
                        style={{ width: '100%', height: 200 }}
                        source={{uri: (urlImg + item.img) }}
                        />
                    </View>
                }/>
            </View>
        );
    }
};
/**
 *  <ScrollView>
                    {
                    data.map(function(element, i) {
                        //urlImg += element['img'];
                        //console.log(urlImg+element['id']);
                        return (
                            
                        );
                    })
                    }
                </ScrollView>
 * <Text style={{fontSize : 25, marginBottom : 20}}>HOME SCREEN</Text><Button
                title='About'
                onPress = {() => this.props.navigation.navigate('About')}
            />
 */
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});