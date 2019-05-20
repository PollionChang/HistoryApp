import React, {Component} from 'react'

import {View, TextInput, StyleSheet,AsyncStorage} from 'react-native'

import news from '../../data/news'

export default class Search extends Component {
  data: [];

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      temp: []
    }
    this.read();
  }

  read() {
    AsyncStorage.getItem('search', (error, result) => {
      if (!error) {
        this.data = JSON.parse(result) || [];
      }
    })
  }

  saveStorage() {
    if (!!this.state.query) {
      this.data.push({query: this.state.query});
      AsyncStorage.setItem('search', JSON.stringify(this.data), (error) => {
        if (error) {
          alert('失败');
        }
      });
    }

  }

  submitForm() {
    this.saveStorage();
    this.state.temp = [];
    let value = this.state.query;
    for (let i = 0; i < news.length; i++) {
      if (value != "" && news[i].title.indexOf(value) >= 0) {
        this.state.temp.push(news[i]);
      }
    }
    this.setState({temp: this.state.temp});
    this.props.navigation.navigate('SearchList', {temp: this.state.temp})
  }

  render() {
    return (
      <View style={{
        backgroundColor:'#c2c2c7',
       padding:7
      }}>
        <TextInput style={styles.textInput}
                   placeholder={"搜索..."}
                   autoFouces
                   placeholderTextColor="#717171"
                   onSubmitEditing={this.submitForm.bind(this)}
                   onChangeText={(query) => {
                     this.setState({
                       query
                     })
                   }}
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor:'#fff',
    borderRadius:5,
    height:30,
    lineHeight:30,
    fontSize:14,
    padding: 0,
    paddingLeft:5
  }
});
