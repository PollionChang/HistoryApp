import React, {Component} from "react"
import {Dimensions, StyleSheet, View, WebView} from 'react-native'

const DEVICE_WIDTH = Dimensions.get(`window`).width;
export default class SearchResult extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('text', '朝代'),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillMount(): void {
    let text = this.props.navigation.state.params.text;
    this.setState({text})
  }

  render() {

    // let webView_style = {height: it.state.webview_h,width: gScreen.width};
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: `https://m.baidu.com/s?wd=${this.state.text}&rsv_bp=0&ch=&tn=baidu&bar=&rsv_spt=3&ie=utf-8&rsv_sug3=3&rsv_sug=0&rsv_sug4=95&rsv_sug1=1&inputT=1001`,
            headers: {'Cache-Control': 'no-cache'}}}
          style={{width: DEVICE_WIDTH}}

        />
      </View>
    )

  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#faf8ec'
  }
});