import {Dimensions, StyleSheet} from "react-native";
const DEVICE_WIDTH = Dimensions.get(`window`).width;
const DEVICE_HEIGHT = Dimensions.get(`window`).height;
const styles = StyleSheet.create({
  timeLineContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT - 100,
    flex: 1,
    padding: 20,
  },
  floatContainer: {
    width: DEVICE_WIDTH,
    flex: 1,
    position: 'absolute',
    top: 60
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#faf8ec'
  },
  searchbar: {
    width: DEVICE_WIDTH,
    backgroundColor: 'blue', //no effect
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  }
});

export default styles
