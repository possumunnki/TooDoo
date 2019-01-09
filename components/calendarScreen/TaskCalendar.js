import React from 'react'
import {StyleSheet, Text, View, AsyncStorage} from 'react-native'
import {Calendar} from 'react-native-calendars'
import {getToday} from '../utility/DateTime'

export default class TaskCalendar extends React.Component{
  constructor(props) {
    super(props)
    this.data = []
    this.retrieveTasks = this.retrieveTasks.bind(this)
    this.createDots = this.createDots.bind(this)
    this.state = {data: this.data}
  }

  componentDidMount() {
    this.retrieveTasks()
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
            this.setState({data : this.data}, console.log("data: ", this.data))
          })
        })
      } 
    })
  }

  createDots() {
    var today = getToday()
    let dates = {[today]: { selected: true, selectedColor: 'green' }}
    const deadLine = {key:'deadLine', color: 'red'}

    this.state.data.map((task) => {
      dates[task.item.deadLine] = {dots:[deadLine]}
    })
    return dates
  }

  render() {
    this.createDots()

   
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
          markedDates = {this.createDots()}
          markingType={'multi-dot'}
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