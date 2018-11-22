import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Calendar} from 'react-native-calendars'
import {getToday} from '../utility/DateTime'

export default class TaskCalendar extends React.Component{
    constructor(props) {
      super(props)
    }

  render() {
    var today = getToday()

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
          markedDates = {{
            [today]: { selected: true, selectedColor: 'green' }
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