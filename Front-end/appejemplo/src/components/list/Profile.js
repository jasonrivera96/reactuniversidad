import React from "react";
import { Linking, View } from "react-native";
import Task from "./Task";
import { Icon } from "react-native-vector-icons/Icon";

const instagram_username = <Icon name="instagram" size={30} color="black"/>


const Profile = () => {
    return (
        <View style={styles.item}>
            <View style={styles.supimage}>
                <View style={styles.leftside}>
                    <Image style={styles.Image} source={{uri: Task.urls.raw}} />
                </View>
                <View style={styles.rightside}>
                    <Text style={{color: 'blue'}} onPress={() => {
                        Linking.openURL(task.user.portfolio_url)
                    }}>
                        {task.user.name}
                    </Text>
                </View>
                <View style={styles.redes}>
                    <Text style={{color: "blue"}} onPress={() => {
                        Linking.openURL(task.user.social.instagram_username)
                    }}>
                        {instagram_username}
                    </Text>
                </View>
                <View style={styles.redes}>
                    <Text style={{color: "blue"}} onPress={() => {
                        Linking.openURL(task.user.social.portfolio_url)
                    }}>
                        {portfolio_url}
                    </Text>
                </View>
            </View>
            <View style={styles.containerKpi}>
                <View style={styles.kpiR}>
                    <Image style={styles.image2} source={require('../../../image.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadious: "20",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    supimage: {
        width: "100%",
        height: "100%",
        flexBasis: "70%",
        display: "flex",
        flexDirection: "row"
    },
    leftside: {
        flexBasis: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, image: {
        width: 100,
        height: 100,
        borderRadious: 50
    },
    rightside: {
        flexBasis: "flex",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    redes: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    containerKpi: {
        width: "",
        display: "",
        flexDirection: "",
        justifyContent: ""
    },
    kpiR: {
        width: 20
    },
    image: {
        width: 20,
        height: 20
    },
    image2: {
        width: 20,
        height: 20
    }
})