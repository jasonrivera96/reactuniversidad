from fastapi import FastAPI, File, UploadFile, Form
from langchain.document_loaders import PyPDFLoader
from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO

import getpass
import streamlit as st
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:19006"],
    allow_methods=["*"],
    allow_headers=["*"],
)

os.environ['OPENAI_API_KEY'] ='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'
default_doc_name = 'docEnMemoria.pdf'

def process_doc(
    path: str = '',
    is_local: bool = False,
    question: str = ''
):
    

    """ try:
        if not is_local:
            response = os.system(f'curl -o {default_doc_name} {path}')
            if response != 0:
                raise Exception("Error al descargar el archivo")

        _, loader = PyPDFLoader(BytesIO(open(default_doc_name, "rb").read())) if not is_local \
            else PyPDFLoader(path)

        doc = loader.load_and_split()

        print(doc[-1])

        qa = RetrievalQA.from_chain_type(llm=OpenAI(), chain_type='stuff', retriever=doc)

        respuesta = str(qa.run(question))

        print(respuesta)
        return respuesta

    except Exception as e:
        return {"error": str(e)} """






    """ try:
        if not is_local:
            response = os.system(f'curl -o {default_doc_name} {path}')
            if response != 0:
                raise Exception("Error al descargar el archivo")

        _, loader = PyPDFLoader(BytesIO(open(default_doc_name, "rb").read())) if not is_local \
            else PyPDFLoader(path)
        print("archivo cargado con exito")
        doc = loader.load_and_split()

        print(doc[-1])

        index = faiss.IndexFlatL2(OpenAIEmbeddings.dimension())
        embeddings = OpenAIEmbeddings().embed_documents(doc)
        index.add(embeddings)
        _, I = index.search(OpenAIEmbeddings().embed_query(question), 1)
        relevant_doc = doc[I[0][0]]

        qa = RetrievalQA.from_single_document(llm=OpenAI(), document=relevant_doc)

        respuesta = str(qa.run(question))

        print(respuesta)
        return respuesta

    except Exception as e:
        return {"error": str(e)} """







    try:
        _, loader = os.system(f'curl -o {default_doc_name} {path}'), PyPDFLoader(f"./{default_doc_name}") if not is_local \
        else PyPDFLoader(path)
        doc = loader.load_and_split()

        print(doc[-1])

        db = Chroma.from_documents(doc, embedding=OpenAIEmbeddings())
        qa = RetrievalQA.from_chain_type(llm=OpenAI(), chain_type='stuff', retriever=db.as_retriever())
        respuesta = str(qa.run(question))

        return respuesta        
    
    except Exception as e:
        return {"error": str(e)}



@app.post("/upload")
async def upload_pdf(pdfFile: UploadFile = File(...), question: str = Form(...)):
    try:
        pdf_data = await pdfFile.read()

        with open("docEnMemoria.pdf", "wb") as docPdf:
            docPdf.write(pdf_data)

        pdf_path = os.path.abspath("docEnMemoria.pdf")

        respuesta =process_doc(
            path=pdf_path,
            is_local=True,
            question=question
        )
        return {"message": respuesta}
        

    except Exception as e:
        print("Error: " + e)
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)