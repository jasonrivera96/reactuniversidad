import React from "react";
import {Image, Linking, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
const tw = <Icon name="instagram" size={30} color="black"/>
const fb = <Icon name="facebook" size={30} color="black"/>
const yt = <Icon name="youtube" size={30} color="black"/>
const tt = <Icon name="tiktok" size={30} color="black"/>

const ProfileCard = () => {
    const user = {
        avatar: "https://media.licdn.com/dms/image/D4E03AQEiDK6f8zWdzw/profile-displayphoto-shrink_800_800/0/1677633946654?e=2147483647&v=beta&t=JuELBZWIVKdQQBrs2APRyXcgFTkmNWWGTOUCXro11yI",
        coverPhoto: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Jason RP"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.instagram.com/jasontarz/")}>
                    {tw}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.facebook.com/")}>
                    {fb}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.youtube.com/@JasonTarz/")}>
                    {yt}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.tiktok.com/@jasontarz/")}>
                    {tt}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            alignItems: "center",
            height: 200,
        },
        coverPhoto: {
            width: "100%",
            height: 300,
            borderWidth: 3,
            borderColor: "black"
        },
        avatarContainer: {
            alignItems: "center",
            marginTop: -75
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 4,
            borderColor: "black"
        },
        name: {
            marginTop: 15,
            fontSize: 20
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 10,
            width: "40%",
            justifyContent: "space-between"
        }
    }
)

export default ProfileCard