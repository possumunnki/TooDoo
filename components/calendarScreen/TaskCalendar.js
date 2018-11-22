import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Calendar} from 'react-native-calendars'


function formatDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export default class TaskCalendar extends React.Component{
    constructor(props) {
      super(props)
    }

  render() {
    var today = formatDate()

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