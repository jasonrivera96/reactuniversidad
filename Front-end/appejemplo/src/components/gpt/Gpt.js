import {View, StyleSheet, Text, FlatList, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const ChatGPT = () => {
    const [data, setData] = useState([]);
    const apiKey = "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"
    const apiUrl = "https://api.openai.com/v1/engines/text-davinci-002/completions"
    const [textInput, setTextInput] = useState("");

    const handleSend = async () => {
        const prompt = textInput
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.5,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ${apiKey}'
            }
        });
        const text = response.data.choices[0].text;
        setData([...data, {type: "user", "text": textInput}, {type: "bot", "text": text}]);
        setTextInput("");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Integración con ChatGPT
            </Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles.body}
                renderItem={({item}) =>(
                    <View style={{flexDirection:"row", padding: 10}}>
                        <Text>

                        </Text>
                    </View>
                )}
            />
            <TextInput
                value = {textInput}
                onChangeText = {text => setTextInput(text)}
                placeholder = "Pregúntame algo"
            />
            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text style={styles.buttonText}>
                    Continuar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }, title: {

    }, body: {

    }, bot: {

    }, button: {

    }, buttonText: {

    }, input: {

    }
  })

export default ChatGPT