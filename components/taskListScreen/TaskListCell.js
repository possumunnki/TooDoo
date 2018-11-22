import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

export default class TaskListCell extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {scoreData} = this.props
    console.log('scoreData.startData: ', scoreData.startData)
    return(
      /**/
      <View style = {styles.container}>
        <Text style = {styles.title}>{scoreData.title}</Text>
        <Text >{scoreData.startData}</Text>
        <Text>{scoreData.endData}</Text>
      </View>
    )
  }
}

TaskListCell.propTypes = {
    scoreData: PropTypes.object.isRequired
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