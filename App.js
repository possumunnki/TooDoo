import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome"
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import CalendarScreen from './components/calendarScreen/CalendarScreen.js'
import TaskListScreen from './components/taskListScreen/TaskListScreen.js'
import AddTaskScreen from './components/addTaskScreen/AddTaskScreen.js'
import AddButton from './components/addButton/AddButton.js'
import TaskDetailScreen from './components/taskListScreen/TaskDetailScreen.js'

const TaskStack = createStackNavigator({
  TasksList: {screen: TaskListScreen},
  TaskDetail: {screen: TaskDetailScreen},
  AddTask: {screen: AddTaskScreen}
})

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
    screen:  TaskStack,
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