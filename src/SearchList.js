import React, {Component} from 'react'
import {
  StyleSheet,
  ListView,
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'

class SearchList extends Component {

  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.ListData = [];


    let temp = this.props.navigation.state.params.temp;
    if (temp) {
      this.ListData = temp;
      this.state = {
        lists: this.dataSource.cloneWithRows(temp)
      }
    } else {
      this.state = {
        lists: this.dataSource.cloneWithRows(this.ListData)
      }
    }

  }

  componentWillMount(): void {

  }


  handleCancel(rowId) {
    let lists = this.ListData;
    console.log(rowId)
    lists[rowId].isFavorite = !lists[rowId].isFavorite;
    this.setState({
      lists: this.dataSource.cloneWithRows(lists)
    }, () => {
      if (lists[rowId].isFavorite) {
        this.props.add(lists[rowId])
      } else {
        this.props.del(lists[rowId])
      }

    })

  }

  renderHistoryList(row, sectionID, rowID, highlightRow) {
    let _this = this;
    return (
      <View style={styles.item}>
        <View style={styles.itemImg}>
          <Image style={styles.image} source={require('./assets/images/default.jpg')}/>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>{row.title.substring(0, 14) + '...'}</Text>
          <Text style={styles.itemMeta}>{row.desc.substring(0, 22) + '...'}</Text>
        </View>
        <View style={styles.itemImg}>
          {(row.isFavorite) ? <Icon name="ios-heart" size={30} onPress={() => _this.handleCancel(rowID, row)}/> :
            <Icon name="ios-heart-empty" onPress={() => _this.handleCancel(rowID, row)} size={30}/>}
        </View>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.lists}
                  renderRow={this.renderHistoryList.bind(this)}
        />
      </View>
    );
  }

}
let mapStateToProps = (state) => state;
let mapDispatchToProps = (dispatch) => (
  {
    add: (row) => dispatch({type: 'ADD_FAVOURITE', item: row}),
    del: (row) => dispatch({type: 'DELETE_FAVOURITE', item: row})
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(SearchList)


let styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#eae7ff',
    flex: 1,
    paddingTop: 23
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#6435c9',
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 6
  },
  itemImg: {
    height: 85,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
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