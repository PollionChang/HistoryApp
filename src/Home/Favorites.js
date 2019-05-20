import React, {Component} from 'react'
import {
  StyleSheet,
  ListView,
  View,
  Image,
  Text,
  ImageBackground
} from 'react-native';

import {connect} from 'react-redux'

let dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
})

class Favorites extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(): void {

  }

  componentWillUnmount(): void {


  }

  renderHistoryList(row) {
    return (

      <View style={styles.item}>
        <View style={styles.itemImg}>
          <Image style={styles.image} source={require('../assets/images/default.jpg')}/>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>{row.title.substring(0, 14) + '...'}</Text>
          <Text style={styles.itemMeta}>{row.desc.substring(0, 22) + '...'}</Text>
        </View>
      </View>

    )
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/bg-2.jpg')} style={styles.container}>
        <ListView dataSource={this.props.lists}
                  renderRow={this.renderHistoryList}
        />
      </ImageBackground>
    );
  }

}

let mapStateToProps = (state) => ({
  lists: dataSource.cloneWithRows(state.lists)
})

export default connect(mapStateToProps)(Favorites)

let styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-start',
    flex: 1,
    paddingTop: 23,
    backgroundColor:"rgba(254,200,46,0)"
  },
  item: {
    flexDirection: 'row',
    borderColor: '#6435c9',
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 6
  },
  itemImg: {
    height: 85,
    width: 60
  },
  itemText: {},
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