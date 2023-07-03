import React, { useState } from "react";
import { Alert, Modal, StatusBar, StyleSheet, TextInput, Button, Text, View } from "react-native";

const NombreComponent = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [showProfile, setShowProfile] = useState(false);

    const closeProfile = () => {
        setShowProfile(!showProfile)
    }

    const getProfile = () => {
        setShowProfile(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={setApellido}
                />
                <Button title="Salúdame" onPress={getProfile} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showProfile}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed");
                    closeProfile();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Señor o señorita {nombre} {apellido}, permítame decirle: que bonitos ojos tiene compadre :v ( o comadre xD )
                        </Text>
                        <Button title="Cerrar" onPress={closeProfile} />
                    </View>
                </View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "E8EAED",
        marginTop: StatusBar.currentHeight || 0,
        display: "flex"
    }, taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        height: 980
    }, sectionTitle: {
        fontSize: 24,
        fontWeight: "bold"
    }, items: {

    }, peritem: {

    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 22
    }, modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: "100%",
        height: 300,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }, modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: "100%"
    }, inputContainer: {
        marginBottom: 10,
    }, input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
})

export default NombreComponent