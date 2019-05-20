"use strict";

import React, {Component} from 'react'
import {Platform, View, Text} from 'react-native'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Web from './src/SearchResult'
import Detail from './src/ResultDetail'
import HomeContainer from './src/Home/HomeContainer'
import SearchList from "./src/SearchList";
import Store from "./src/Redux/Store";
import {Provider} from "react-redux";
import Splash from './src/Splash'
class rootApp extends Component {
  render() {
    return (
      <Provider store={Store()}>
        <View style={{
          backgroundColor: '#fff',
          flex: 1
        }}>
          <RootContainer/>
        </View>
      </Provider>

    )
  }
}

const HomeStack = createStackNavigator({
  //底部导航页面
  Homes: {
    screen: HomeContainer,
    navigationOptions: {
      header: null  //顶部导航很多都会自己自定义，这里就为空
    }
  },
  //webview
  WebView: {
    screen: Web,
  },
  //webview
  SearchList: {
    screen: SearchList,
  },
  //详情w
  Positioning: {
    screen: Detail,
    navigationOptions: {
      header: null  //顶部导航很多都会自己自定义，这里就为空
    }
  },
  Splash:{
    screen: Splash,
    navigationOptions: {
      header: null  //顶部导航很多都会自己自定义，这里就为空
    }
  }
}, {
  //默认出现的首页页面
  initialRouteName: 'Splash'
});

const RootContainer = createAppContainer(HomeStack);
export default rootApp