import React from 'react';
import {Dimensions, StyleSheet, Text, View ,ScrollView} from 'react-native';
//底部导航栏
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {SearchBar} from 'react-native-elements';
import Timeline from 'react-native-timeline-listview'
class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: '主页',
    title: 'aaaaaaa'
  };
  state = {
    search: '',
    data:[
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  };

  updateSearch = search => {
    console.log(search);
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          style={styles.searchbar}
          platform="android"
          onChangeText={this.updateSearch}
          value={search}
        />
        <ScrollView  keyboardShouldPersistTaps="handled">
          <View>
            <Timeline
              data={this.state.data}
            />
          </View>

        </ScrollView>
      </View>
    );
  }
}

class Circle extends React.Component {
  static navigationOptions = {
    tabBarLabel: '圈子'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>圈子</Text>
      </View>
    );
  }
}

class Tools extends React.Component {
  static navigationOptions = {
    tabBarLabel: '工具'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>这是工具内容</Text>
      </View>
    );
  }
}

class Mypage extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>这是我的内容</Text>
      </View>
    );
  }
}

const BottomTabBar = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    Circle: {
      screen: Circle,
    }
    /*  Tools: {
        screen: Tools,
      },
      Mypage: {
        screen: Mypage,
      },*/
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#000',
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
      },
      labelStyle: {
        fontSize: 14,
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
const DEVICE_WIDTH = Dimensions.get(`window`).width;
console.log(DEVICE_WIDTH)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchbar: {
    width: DEVICE_WIDTH,
    backgroundColor: 'red', //no effect
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  }
});

export default createAppContainer(BottomTabBar);