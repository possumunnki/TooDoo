import React from 'react'
import {StyleSheet, View} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Constants} from 'expo'
import TaskList from './TaskList'

export default class TaskListScreen extends React.Component{
  static navigationOptions = {
    title: 'taskList',
  }

  constructor(props) {
    super(props)
  }

/**
 * NONIIN, TÄSSÄ ON SEURAAVAT HOMMAT:
 * 
 * 1. PARANTAA STORAGE DATA(lisäile kaikki oleelliset tiedot taskDataan)
 * 1.1 KEY OLKOOT PÄIVÄMÄÄRÄ, JONKA SISÄLLÄ ON LISTA TASKEISTA
 * 2. JOS EHIT, NIIN TEE UTILITYLLE DATAN HAKU FUNKTIO(vaatii async await)
 * 3. Tee taskille joku näkymä, jossa on oleelliset tiedot
 *    -listassa voisi olla title, DL
*/


  render() {
    return(
      <View style = {styles.container}>
        <TaskList navigation = {this.props.navigation} ref = 'taskList'/>
        <NavigationEvents 
          onDidFocus={payload => {
            //updates list every time when user switches to this screen
            this.refs.taskList.retrieveTasks()
          }}
        />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  }
})