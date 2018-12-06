import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

export default class TaskListCell extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {taskData} = this.props
    return(
      <View style = {styles.container}>
        <TouchableOpacity
        onPress = {() => {
          this.props.taskClicked()
        }}>
          <Text style = {styles.title}>{taskData.title}</Text>
          <Text sytle = {styles.startData}>DL: {taskData.deadLine}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

TaskListCell.propTypes = {
    taskData: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 3
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'center'
    },
    startData: {
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'center',
    }
})