import React from 'react'
import {StyleSheet, Text, View, FlatList, Button, AsyncStorage} from 'react-native'
import TaskListCell from './TaskListCell'

export default class TaskList extends React.Component{
  constructor(props) {
    super(props)
    this.data = []
    this.retrieveTasks = this.retrieveTasks.bind(this)
    this.state = {data: this.data}
  }

  retrieveTasks() {
    this.data = []

    AsyncStorage.getAllKeys()
    .then(keys => {
      keys.map(key => {
        AsyncStorage.getItem(key).then((value) => {
          this.data.push({
            'key': key,
            'item' : JSON.parse(value)
          })
        })
      })
      this.setState({data : this.data})
    })
    console.log('list refreshed')
  }

  render() {
    return(
      <View style = {styles.containre}>
        <FlatList
          style = {styles.taskContainer}
          data = {this.state.data}
          renderItem = {({item, index}) => 
            <TaskListCell
              scoreData = {item.item}
            />
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
  },
  taskContainer: {
    backgroundColor: 'powderblue',
    borderWidth: 3
  }
})