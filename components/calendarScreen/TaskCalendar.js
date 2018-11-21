import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Calendar} from 'react-native-calendars'

export default class TaskCalendar extends React.Component{
    constructor(props) {
      super(props)
    }

  render() {
    return(
      <View style = {styles.container}>
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: 'powderblue',
            borderRadius: 10,
          }}
          theme={{
            selectedDayBackgroundColor: 'orange',
            selectedDayTextColor: '#ffffff',
          }} 
        />
        
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})