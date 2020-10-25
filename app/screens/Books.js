import React, { Component } from 'react';
import axios from 'axios';
import { Html5Entities } from 'html-entities'; 
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  ActivityIndicator,
  Modal,
  ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Books extends Component {
  state = {
    modalVisible: false,
    data: {},
    dataMemoria: {},
    dataM: false,
    page: 1,
    loading: true,
    notFound: false,
    loadingMore: false,
    search: '',
    searchData: false,
    error: null,
    onEndReachedCalledDuringMomentum : true,
    modalData: {}
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
      dataMemoria: this.state.page === 1 
        ? response.data.data['data']
        : [...this.state.data, ...response.data.data['data']],
    });
  }

  searchFilterFunction = (search) => {
    this.setState({
      search: search,
      searchData: true,
    });
    setTimeout(() => {
      this.setState({
        loading: true,
      });
      const newData = this.state.data.filter(function(item) {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      
      if(newData.length === 0) {
        this.searchData(search);
      } else {
        this.setState({
          data: newData,
        });
      }
    }, 1500);
  }

  searchData = async search => {
    this.setState({loading: true});
    const response = await axios.post(`https://docs.brigadaparaleerenlibertad.com/books/search`, 
                    {title: search});
                    
    this.setState({ 
      data: response.data['data'],
      loading: false,
    });
  }

  _getMoreData = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loading: true
      }),
      () => {
        this.getData();
      }
    );
  };

  _renderFooter = () => {
    if (!this.state.loading) return null;
    else {
      return (
        <View>
          <ActivityIndicator animating size="large" color="#0000ff"/>
        </View>
      );
    }
  };

  _renderNotFound = () => {
    if (this.state.notFound) {
      return(
        <View>
          <Text> NOT FOUND </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  cancel = () => {
    this.setState({
      loading: false,
      data: this.state.dataMemoria,
      notFound: false,
      searchData: false,
    });
  }

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

  toggleOverlay = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const urlImg = 'https://brigadaparaleerenlibertad.com/documents/public/img/img_books/';
    const entities = new Html5Entities();
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{this.state.modalData.title}</Text>
              <ScrollView>
                <Text>{entities.decode(this.state.modalData.description)}</Text>
              </ScrollView>
              <View style={styles.modalButtons}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Cerrar</Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Descargar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <SearchBar
          platform="android"
          round
          lightTheme
          searchIcon={{ size: 24 }}
          onChangeText={this.searchFilterFunction}
          onClear={this.cancel}
          placeholder="Buscar..."
          value={this.state.search}
        />
        
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={Object.values(this.state.data)}
          numColumns={2}
          keyExtractor={item => item.id}
          onEndReached={this.state.searchData ? () => {} : this._getMoreData}
          onEndReachedThreshold={0.9}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          ListHeaderComponent={this._renderNotFound}
          ListFooterComponent={this._renderFooter}
          renderItem={({item}) =>
          
          <View style={{flex: 1, backgroundColor:'white', width: '49%', height:205, margin: 2}}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
                item.description = item.description.replace(/<(?:.|\n)*?>/gm, '');
                this.setState({
                  modalData: item,
                });
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
    elevation: 2,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    textTransform: 'uppercase',
  },
  
  modalButtons: {
    flex : 2,
    width: '100%',
    height: 150,
  }
});