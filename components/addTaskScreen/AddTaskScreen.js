import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import { Constants } from 'expo';
import DatePicker from 'react-native-datepicker'
import {getToday} from '../utility/DateTime'

export default class AddTaskScreen extends React.Component{
  constructor(props) {
    super(props)
    this.today = getToday()
    this.state = {date:this.today}
  }

  componentDidMount() {
    console.log()
  }

  render() {
    return(
      <View style = {styles.container}>

        <TextInput
          style = {styles.titleInput}
          value = 'title'
        />

        <Text>DL:</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={this.state.date}
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
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,

    justifyContent: 'center',
  },
  titleInput: {
    borderWidth: 1,
    margin: 10,
    textAlign: 'center',
  }
})