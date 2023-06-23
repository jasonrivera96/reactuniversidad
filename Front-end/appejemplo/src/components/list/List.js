import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Task from "./Task";
const ListComponent = () => {

    const [taskItems, setTaskItems] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData= async () => {
        try {
            const response = await fetch("https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4")
            const jsonData = await response.json()
            setTaskItems(jsonData)
        } catch (e) {
            console.log("error: ", e)
        }
    }

    const ItemList = ({ task, i }) => {
        const getProfile = (task) => {

        }
        return (
            <View>
                <Text>
                    {i}
                </Text>
                <TouchableOpacity style={styles.periten} key={i} onPress={() => getProfile(task)}>
                    <Task task={task}/>
                </TouchableOpacity>
            </View>
        )
    }

    return (taskItems && taskItems.length > 0 ?
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>
                    Se listan perfiles
                </Text>
                <View style={styles.items}>
                    <SafeAreaView>
                        <FlatList data={taskItems} renderItem={ ({item, i}) => (<ItemList task={item} i={i} />) } >
                        </FlatList>
                    </SafeAreaView>
                </View>
            </View>
        </View> :
            <View>
                <Text>
                    No hay datos
                </Text>
            </View>
    )
}
const styles = StyleSheet.create({

})
export default ListComponent