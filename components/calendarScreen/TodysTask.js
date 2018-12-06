import React from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'

const list = [{
  'key': '0', 
  'Item': 'Hoida pyykit'
}, {
  'key': '1', 
  'Item': 'Imuroi kämppä'
}]

export default class TodaysTask extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style = {styles.container}>
        <FlatList
          //style = {styles.scoreContainer}
          data = {list}
          renderItem = {({item, index}) => 
            <Text>{item.Item}</Text>
          }
          keyExtractor={item => item.key}
        />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    margin: 10,
  }
})