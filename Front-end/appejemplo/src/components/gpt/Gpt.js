import { View, StyleSheet, Text, TextInput, Button, Alert, Modal } from "react-native";
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
                <Text style={styles.message}>CHAT OPENAI</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese un texto "
                        value={textInput}
                        onChangeText={setTextInput}
                        onSubmitEditing={sendMessageToChatGPT}
                    />
                    <Button title="Enviar" onPress={sendMessageToChatGPT} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: 400,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
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
        width: 400,
        alignItems: 'left',
        borderWidth: 1,
        borderColor: 'gray', 
        borderRadius: 5, 
        padding: 10, 
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    respuesta: {
        fontSize: 14,
        marginBottom: 5,
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente
    },
});

export default Gpt