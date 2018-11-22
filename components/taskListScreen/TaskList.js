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

  componentDidMount() {
    this.retrieveTasks()

  }

  retrieveTasks() {
    this.data = []

    AsyncStorage.getAllKeys()
    .then(keys => {
      keys.map(key => {
        AsyncStorage.getItem(key).then((value) => {
          console.log('Key amount: ' + keys.length)
          console.log('Key: ' + key + ', item: ' + value)
          this.data.push({
            'key': key,
            'item' : JSON.parse(value)
          })
        })
      })
      console.log("TaskStorage, retrieveTasks()", this.data)
      this.setState({data : this.data})
    })
  }


  render() {
    return(
      <View>
        <FlatList
          style = {styles.scoreContainer}
          data = {this.state.data}
          renderItem = {({item, index}) => 
            <TaskListCell
              scoreData = {item.item}
            />
          }
          keyExtractor={item => item.key}
        />
        <Button 
          title = 'reflesh'
          onPress = {() => {
            this.retrieveTasks()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',

  }
})