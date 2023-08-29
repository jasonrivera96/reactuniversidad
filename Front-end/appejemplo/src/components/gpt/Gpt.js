import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert, Modal } from "react-native";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { CONTADOR_VOCALES, CONVERTIDOR_BINARIO, FACTORIAL } from "./Constantes";

const apiKey = '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';


const Gpt = () => {

    const configuration = new Configuration({
        /* organization: "org-wynEPyJcGvJfZHKQl1lpwVCY", */
        apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const [respuestas, setRespuestas] = useState([]);
    const [tokens, setTokens] = useState([]);
    const [textInput, setTextInput] = useState("");


    const sendMessageToChatGPT = async () => {
        setTextInput("");
        setRespuestas(null);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system", "content": FACTORIAL
                },
                { role: "user", content: `${textInput}` }],
            temperature: 0.5,
            max_tokens: 50,
            stop: [" Human:", " AI:"],
        });

        console.log(response);

        if (response.data.choices && response.data.choices.length > 0) {
            const botReply = response.data.choices[0].message.content;
            setTokens(response.data.usage.completion_tokens);
            setRespuestas(`${botReply}`);
            
        } else {
            console.log('No se encontró una respuesta válida del bot');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa un texto "
                        value={textInput}
                        onChangeText={setTextInput}
                        onSubmitEditing={sendMessageToChatGPT}
                    />
                    <TouchableOpacity style={styles.button} onPress={sendMessageToChatGPT}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.respuestasContainer}>
                    <Text style={styles.respuesta}>{respuestas}</Text>
                    <Text style={styles.informacion}>Tokens utilizados: {tokens}</Text>
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
        borderWidth: 0,
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

export default Gpt