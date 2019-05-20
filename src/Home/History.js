import React, {Component} from 'react'
import {AsyncStorage, ImageBackground, ListView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from "react-native-elements";

export default class History extends Component {

  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      lists: dataSource
    }

    this.didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        AsyncStorage.getItem('search', (error, result) => {
          if (!error) {
            if (!!result) {
              this.data = JSON.parse(result)
              this.setState({
                lists: dataSource.cloneWithRows(this.data)
              })
            } else {
              this.setState({
                lists: dataSource.cloneWithRows([])
              })

            }

          }
        })
      }
    );
  }

  renderHistoryList(row) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemHeader}>{row.query}</Text>
      </View>
    )
  }

  deleteAll() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.setState({
      lists: dataSource.cloneWithRows([])
    })
    AsyncStorage.removeItem('search').then(res => alert('删除成功'))
  }

  componentWillUnmount(): void {
    this.didBlurSubscription.remove;
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/bg-2.jpg')} style={styles.container}>
        <Header
          statusBarProps={{barStyle: 'light-content'}}
          barStyle="light-content" // or directly
          rightComponent={
            <Icon name="ios-trash" onPress={() => this.deleteAll()} size={30} style={{color:'#fff'}}/>
          }
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
            height: 50,
            paddingBottom: 5
          }}
        />
        <ListView dataSource={this.state.lists}
                  renderRow={this.renderHistoryList}
        />
      </ImageBackground>
    );
  }

}

let styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-start',
    backgroundColor: "rgba(254,200,46,0)",
    flex: 1
  },
  item: {
    backgroundColor: '#fff',
    borderColor: '#6435c9',
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 6
  },
  itemImg: {
    height: 85,
    width: 60
  },
  itemText: {
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 10
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6
  },
  itemHeader: {
    fontSize: 18,
    fontWeight: "300",
    color: '#6435c9',
    marginBottom: 6
  },
  itemMeta: {
    fontSize: 16,
    marginBottom: 6
  },
  image: {
    height: 85,
    width: 60
  }

})