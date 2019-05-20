'use strict';

import React from 'react';
import {Dimensions, Image, InteractionManager, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper'
import {NavigationActions} from 'react-navigation'

const {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigation.reset([NavigationActions.navigate({routeName: 'Homes'})], 0)
      });
    }, 5000);
  }

  handleTouch() {
    const {navigation} = this.props;
    InteractionManager.runAfterInteractions(() => {
      navigation.reset([NavigationActions.navigate({routeName: 'Homes'})], 0)
    });
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.pos}>
          <Text style={styles.text} onPress={this.handleTouch.bind(this)}>跳过</Text>
        </View>
        <Swiper style={styles.wrapper} showsButtons prevButton={<Text style={{display: 'none'}}/>}
                nextButton={<Text style={{display: 'none'}}/>}>
          <View style={styles.slide1}>
            <Image style={styles.img} source={require('./assets/images/wrap-1.png')} resizeMode={"stretch"}/>
          </View>
          <View style={styles.slide2}>
            <Image style={styles.img} source={require('./assets/images/wrap-2.png')} resizeMode={"stretch"}/>
          </View>
          <View style={styles.slide3}>
            <Image style={styles.img} source={require('./assets/images/wrap-3.png')} resizeMode={"stretch"}/>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    pos: {
      width: 60,
      height: 30,
      backgroundColor: 'rgba(0,0,0,0.6)',
      position: 'absolute',
      top: 15,
      right: 25,

      zIndex: 100,
      borderRadius: 5,

    },
    text: {
      color: '#fff',
      lineHeight: 30,
      textAlign: 'center',
      height: 30,
      textAlignVertical: 'center',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    img: {
      width: width,
      height: height
    }
  }
)

export default Splash