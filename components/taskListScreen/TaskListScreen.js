import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Constants } from 'expo'
import TaskList from './TaskList'

export default class TaskListScreen extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style = {styles.container}>
        <TaskList/>
        
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  }
})