import React from 'react'
import {StyleSheet, View} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Constants} from 'expo'
import TaskList from './TaskList'

export default class TaskListScreen extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style = {styles.container}>
        <TaskList ref = 'taskList'/>
        
        <NavigationEvents 
          onDidFocus={payload => {
            //updates list every time when user switches to this screen
            this.refs.taskList.retrieveTasks()
          }}
        />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  }
})