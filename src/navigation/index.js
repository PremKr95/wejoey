import React from "react"
import {createAppContainer } from "react-navigation" 
import {createStackNavigator } from "react-navigation-stack" 
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
export default createAppContainer(createStackNavigator(
  {
    FirstScreen: FirstScreen,
    SecondScreen: SecondScreen,
    ThirdScreen: ThirdScreen,
  },
  {
    initialRouteName: "FirstScreen",
    // navigationOptions:{
    //   header:null
    // }
  } 
))
