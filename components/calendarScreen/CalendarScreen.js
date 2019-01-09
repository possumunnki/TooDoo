import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Constants } from 'expo'
import {NavigationEvents} from 'react-navigation'
import TaskCalendar from './TaskCalendar.js'
import TodaysTask from './TodysTask.js'

export default class ClaendarScreen extends React.Component{
  constructor(props) {
      super(props)
  }

  render() {
    return(
      <View style = {styles.container}>
        <TaskCalendar ref = 'taskCalendar'/>
        <NavigationEvents 
          onDidFocus={payload => {
            //updates list every time when user switches to this screen
            this.refs.taskCalendar.retrieveTasks()
          }}
        />

      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
})