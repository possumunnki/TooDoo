import React from 'react';
import Icon from "react-native-vector-icons/Ionicons"
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
          name="ios-contacts"
          color={tintColor}
          size={25}
        />
      )
  })
  },
  TaskList: {
    screen:  TaskListScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="ios-contacts"
          color={tintColor}
          size={25}
        />
      )
  })
  },
  AddTask: {
    screen: AddTaskScreen,
    navigationOptions: () => ({
      tabBarIcon:({tintColor}) => (
        <Icon
        name="ios-add"
        color={tintColor}
        size={25}
      />
      )
    })
  }
});

export default createAppContainer(TabNavigator);