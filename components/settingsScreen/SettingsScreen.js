import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class SettingsScreen extends React.Component{
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