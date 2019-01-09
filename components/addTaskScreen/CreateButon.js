import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

export default class CreateButton extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {clicked, title} = this.props

    return(
      <TouchableOpacity style={styles.button}
        onPress={() => {
          clicked()
        }}
        >
      <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

CreateButton.propTypes = {
  title: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color:'#ffffff',
    textAlign: 'center'
  },
  button: {
    padding:10,
    margin: 10,
    backgroundColor: '#202646',
    borderRadius:5,
  }
})