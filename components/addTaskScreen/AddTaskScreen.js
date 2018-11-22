import React from 'react'
import { Constants } from 'expo'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import DatePicker from 'react-native-datepicker'
import CreateButton from './CreateButon.js'
import {getToday} from '../utility/DateTime'
import {storeTask} from '../utility/TaskStorage'
import TaskData from '../utility/TaskData.js'

export default class AddTaskScreen extends React.Component{
  constructor(props) {
    super(props)
    this.today = getToday()
    this.createTask = this.createTask.bind(this)
    this.state = {
      startDate : this.today,
      endDate: this.today,
      taskTitle: ''}
  }

  createTask() {
    title = this.state.taskTitle
    startDate = this.state.startDate
    endDate = this.state.endDate
    if(title != '') {
      let data = new TaskData(title, startDate, endDate)
      storeTask(JSON.stringify(data))
      this.textInput.clear()
    }
  }

  render() {
    return(
      <View style = {styles.container}>

        <TextInput
          ref = {input => {this.textInput = input}}
          style = {styles.titleInput}
          onChangeText={(title)=>this.setState({taskTitle: title})}
          placeholder='Name of the task'
          value={this.state.taskTitle}
        />
        <View style={{flexDirection:"row", margin: 15}}>
        <Text>Starting date:</Text>
          <DatePicker
            style={{width: 200, position: 'absolute', right: 0}}
            date={this.state.startDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({startDate: date})}}
          />
        </View>
        <View style={{flexDirection:"row", margin: 15}}>
        <Text>DL:</Text>
          <DatePicker
            style={{width: 200, position: 'absolute', right: 0}}
            date={this.state.endDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={this.state.startDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({endDate: date})}}
          />
        </View>
        <CreateButton
          clicked = {() => {
            this.createTask()
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
  titleInput: {
    borderWidth: 1,
    margin: 10,
    textAlign: 'center',
  }
})
