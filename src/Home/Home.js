import React from 'react';
import {Dimensions, StyleSheet, View,ImageBackground} from 'react-native';
import {Header} from "react-native-elements";
import Timeline from "react-native-timeline-listview";
import timeJson from '../../data/timeline'
import Search from "./Search";

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: '主页',
  };

  constructor() {
    super();
    this.state = {
      search: '',
      data: timeJson
    };
  }

  handleTime(event) {
    this.props.navigation.navigate('WebView', {text: event.title})
  }

  render() {
    return (
      <ImageBackground style={styles.img} source={require('../assets/images/bg-1.jpg')}>
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          centerComponent={{ text: '测试交付APP', style: { color: '#fff' } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
            height:50
          }}
        />
        <Search navigation={this.props.navigation}/>
        <View style={[styles.container]}>
          <Timeline
            style={styles.list}
            data={this.state.data}
            onEventPress={this.handleTime.bind(this)}
            circleSize={20}
            circleColor='rgb(45,156,219)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{minWidth: 52}}
            timeStyle={{
              textAlign: 'center',
              backgroundColor: '#ff9797',
              color: 'white',
              padding: 5,
              borderRadius: 13,
              minWidth: 100
            }}
            descriptionStyle={{color: 'gray'}}
            options={{
              style: {paddingTop: 5}
            }}
          />
        </View>

      </View>
      </ImageBackground>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get(`window`).width;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    flex: 1
  },
  list: {
    flex: 1,
    paddingLeft: 5
  },
  img:{
    flex:1
  }
});




