import React, {Component} from 'react';
import axios from 'axios';

import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    FlatList,
    TouchableHighlight,
    Modal,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';


export default class Books extends Component {
    state = {
        modalVisible: false,
        data: {},
        page: 1,
        loading: true,
        loadingMore: false,
        error: null
    }
    
    _isMounted = false;

    async getData() {
        const {page} = this.state;
        const response = await axios.get(`https://docs.brigadaparaleerenlibertad.com/books?page=${page}`);

        this.setState({
            data: this.state.page === 1 
                ? response.data.data['data']
                : [...this.state.data, ...response.data.data['data']],
          loading: false,
          url: response.data.data['next_page_url'],
        });
    }

    _getMoreData = () => {
        this.setState(
          (prevState, nextProps) => ({
            page: prevState.page + 1,
            loadingMore: true
          }),
          () => {
            this.getData();
          }
        );
    };

    _renderFooter = () => {
        if (!this.state.loadingMore) return null;

        return (
            <View>
                <ActivityIndicator animating size="large" color="#0000ff"/>
            </View>
        );
    };

    componentDidMount() {
        this._isMounted = true;
        this.getData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        var urlImg = 'https://brigadaparaleerenlibertad.com/documents/public/img/img_books/';
        console.log(this.state.url);
        return (
            <SafeAreaView style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                    <FlatList 
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    data={Object.values(this.state.data)}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    onEndReached={this._getMoreData}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={this._renderFooter}
                    renderItem={({item}) =>
                    
                        <View style={{flex: 1, backgroundColor:'white', width: '49%', height:205, margin: 2}}>
                            <TouchableOpacity
                            onPress={() => {
                            this.setModalVisible(true);
                            }}
                            >
                                <ImageBackground
                                style={{width: '100%', height: 200, }}
                                source={{uri: (urlImg + item.img) }} 
                                >
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        
                    }/>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});