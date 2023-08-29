import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert, Modal } from "react-native";

const LangChain = () => {

    

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa un texto "
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.respuestasContainer}>
                    <Text style={styles.respuesta}></Text>
                    <Text style={styles.informacion}>Tokens utilizados: </Text>
                </View>
            </View>
        </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        padding: 66,
        alignItems: 'center',
    },
    input: {
        color: 'grey',
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 25,
        paddingHorizontal: 13,
    },
    message: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    informacion: {
        fontSize: 14,
        fontWeight: 100,
        marginLeft: 2
    },
    respuestasContainer: {
        height: 200,
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray', 
        borderRadius: 5, 
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    respuesta: {
        fontSize: 14,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'cadetblue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 70,
        marginTop: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default LangChain