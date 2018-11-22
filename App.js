import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome"
import {createBottomTabNavigator,createAppContainer } from 'react-navigation'
import CalendarScreen from './components/calendarScreen/CalendarScreen.js'
import TaskListScreen from './components/taskListScreen/TaskListScreen.js'
import AddTaskScreen from './components/addTaskScreen/AddTaskScreen.js'

const TabNavigator = createBottomTabNavigator({
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="calendar"
          color={tintColor}
          size={25}
        />
      )
  })
  },
  Tasks: {
    screen:  TaskListScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="list"
          color={tintColor}
          size={25}
        />
      )
  })
  },
  Add: {
    screen: AddTaskScreen,
    navigationOptions: () => ({
      tabBarIcon:({tintColor}) => (
        <Icon
          name="plus"
          color={tintColor}
          size={25}
        />
      )
    })
  }
});

export default createAppContainer(TabNavigator);