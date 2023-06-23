import React from "react";
import {Text, View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from "./components/home/Menu";

const tab = createBottomTabNavigator();


const Navigation = () => {
    return(
        <tab.Navigator initialRouteName = "Home">
            <tab.Screen name = "Home" component={Menu} options = {{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => {
                    <MaterialComunityIcons name="home" color={color} size={size}/>
                }
                }}>
            </tab.Screen>
        </tab.Navigator>
    )
}

export default Navigation;