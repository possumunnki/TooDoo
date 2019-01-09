import React from 'react'
import {StyleSheet, Text, View, FlatList, Button, AsyncStorage, Alert} from 'react-native'
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
      //whenever there are not any data on storage
      if(keys.length == 0) {
        this.data.push({
          'key': '0', 
          'item': {
            'title':'task not found',
            'deadLine': ''
            }
        })
      } else {
        //otherwise adds datas on array
        keys.map(key => {
          AsyncStorage.getItem(key).then((value) => {
            this.data.push({
              'key': key,
              'item' : JSON.parse(value)
            })
          })
        })
      }

      this.setState({data : this.data})
    })
    console.log('list refreshed')
  }

  render() {
    return(
      <View style = {styles.container}>
        <FlatList
          style = {styles.taskContainer}
          data = {this.state.data}
          renderItem = {({item, index}) => 
            <TaskListCell
              taskData = {item.item}
              taskClicked = {() => {
                this.props.navigation.navigate('TaskDetail', {taskData: item})
              }}
            />
          }
          keyExtractor={item => item.key}
        />
        <Button 
          title = 'clear'
          color = 'black'
          onPress = {() => {
            Alert.alert(
              'Clear Storage',
              'Are you sure?',
              [
                {text: 'NO'},
                {text: 'YES', onPress: () => {
                  AsyncStorage.clear()
                  this.retrieveTasks()
                }}
              ]
            )
          }}
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