import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Constants } from 'expo';
import TaskCalendar from './TaskCalendar.js'
import TodaysTask from './TodysTask.js'

export default class ClaendarScreen extends React.Component{
  constructor(props) {
      super(props)
  }

  render() {
    return(
      <View style = {styles.container}>
        <TaskCalendar/>
        <TodaysTask />
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