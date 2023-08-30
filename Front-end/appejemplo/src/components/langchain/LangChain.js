import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
//import * as DocumentPicker from "expo-document-picker";
import { PDFDocument, rgb } from 'pdf-lib';
//import axios from "axios";

const LangChain = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [question, setQuestion] = useState("");
    const [responseText, setResponseText] = useState("");

    const onDrop = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
      };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };


    const uploadFilesToBackend = async () => {

        try {
            const pdfDoc = await PDFDocument.create();
      
            for (const file of selectedFiles) {
              const existingPdfBytes = await file.arrayBuffer();
              const newPdf = await PDFDocument.load(existingPdfBytes);
      
              const pages = await pdfDoc.copyPages(newPdf, newPdf.getPageIndices());
              pages.forEach((page) => pdfDoc.addPage(page));
            }
      
            const mergedPdfBytes = await pdfDoc.save();
            const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });

            const pdfUrl = URL.createObjectURL(mergedPdfBlob);
            const formData = new FormData();

            formData.append('pdfFile', mergedPdfBlob);
            formData.append('question', question);
      
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData,
            });
      
            const data = await response.json();
            console.log(data);
            setResponseText(data.message);
        } catch (error) {
            console.error('Error al enviar al back:', error);
        }

        /* const formData = new FormData();
        formData.append("file", {
            uri: selectedFiles.uri,
            name: selectedFiles.name,
            type: selectedFiles.type,
        });
    
        try {
            const response = await axios.post("http://localhost/8000", formData);
            console.log("Archivo enviado y procesado:", response.data);
            // Realiza cualquier acción necesaria con la respuesta del backend
        } catch (error) {
            console.error("Error al enviar el archivo:", error);
        } */
    };
    
    /* const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "application/pdf",
            });

            if (result.type === "success") {
                console.log('asdsdasda')
                setselectedFiles(result);
                uploadFilesToBackend(result); // Envía el archivo al backend
            }
        } catch (error) {
            console.error("Error al seleccionar el documento:", error);
        }
    }; */

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const inputStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '300px',
    };

    const buttonStyle = {
        background: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const responseStyle  = {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '300px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>LangChain PDF</h1>
            <input style={inputStyle} type="file" accept=".pdf" multiple onChange={onDrop} />
            <br />
            <input style={inputStyle} type="text" placeholder="Ingrese una pregunta" value={question} onChange={handleQuestionChange} />
            <br />
            <button style={buttonStyle} onClick={uploadFilesToBackend}>Procesar</button>
            <br />
            {responseText && (
                <div style={responseStyle}>
                    <h1>Respuesta del Backend:</h1>
                    <p>{responseText}</p>
                </div>
            )}
        </div>
       
        /* <View style={styles.container}>
            <Button title="Subir PDF" onPress={pickDocument} />
            {selectedFiles && (
                <Text>Archivo seleccionado: {selectedFiles.name}</Text>
            )}
        </View> */
    );
};


export default LangChain;
