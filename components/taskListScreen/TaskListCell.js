import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

export default class TaskListCell extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {scoreData} = this.props
    return(
      /*
      NONIIN, TERVETULOA TAKAISIN, NYT TILANNE ON NIIN, ETTÄ SUN PITÄS
      1. PARANTAA STORAGE DATA(lisäile kaikki oleelliset tiedot taskDataan)
      2. JOS EHIT, NIIN TEE UTILITYLLE DATAN HAKU FUNKTIO
      3. JOSTAIN SYYSTÄ TITLE JA DATE EI NÄY YHTÄAIKAA
      4. MUISTA MUUTTAA SCOREDATA TOISEKSI NIMIKSI
      */
      <View style = {styles.container}>
        <Text style = {styles.title}>{scoreData.title}</Text>
        <Text sytle = {styles.startData}>DL: {scoreData.deadLine}</Text>
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