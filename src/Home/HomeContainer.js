import React from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';
//底部导航栏
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Index from './Home'
import Favorites from './Favorites'
import History from './History'


const HomeContainer = createBottomTabNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '主页',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="ios-home" size={30} color={tintColor}/>
        )
      })
    },
    //搜索结果列表
    Favorites: {
      screen: Favorites,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '收藏',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="ios-heart" size={30} color={tintColor}/>
        )
      })
    },
    //详情页
    History: {
      screen: History,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '历史记录',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="ios-copy" size={30} color={tintColor}/>
        )
      })
    }
  },
  {
    initialRouteName: 'Index',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#cccccc',
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#333333',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        height:Dimensions.get('window').height*0.09,
        borderTopColor: '#ccc',
      },
      labelStyle: {
        margin: 1
      },
      indicatorStyle: {height: 0}, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
  });


export default HomeContainer;