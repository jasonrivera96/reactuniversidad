import React from "react";
import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./components/home/Menu";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from "./components/list/List";
import NombreComponent from "./components/nombre/Nombre";
import ChatGPT from "./components/gpt/Gpt";
import LangChain from "./components/langchain/LangChain";

const Tab = createBottomTabNavigator()

const navigation = () => {
  return(
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Menu} options={{
              tabBarLabel: "Home",
          }}>
          </Tab.Screen>
          <Tab.Screen name="List" component={List} options={{
              tabBarLabel: "Listado",
          }}>
          </Tab.Screen>
          <Tab.Screen name="Nombre" component={NombreComponent} options={{
              tabBarLabel: "Nombre",
          }}>
          </Tab.Screen>
          <Tab.Screen name="ChatGPT" component={ChatGPT} options={{
              tabBarLabel: "ChatGPT",
          }}>
          </Tab.Screen>
          <Tab.Screen name="LangChain" component={LangChain} options={{
              tabBarLabel: "LangChain",
          }}>
          </Tab.Screen>
      </Tab.Navigator>
  )
}

export default navigation