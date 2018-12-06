import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class TaskDetailScreen extends React.Component{
  static navigationOptions = ({navigation}) => {
    data = navigation.state.params.taskData
    return {
      title: 'taskData.title'
      
    }
  }
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style = {styles.container}>
        <Text>Hello Again, React Native</Text>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})