import React from 'react'
import { Header } from '../components/header'

export const Home = () => {
  return (
    <>
    <Header/>
    <main className="relative h-screen overflow-hidden">
        {/* Imagem de fundo com sombra */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 shadow-lg"
          style={{
            backgroundImage: 'url("/students.jpg")', // Caminho da sua imagem de fundo
          }}
        ></div>
        {/* Conteúdo centralizado */}
        <div className="relative z-10 flex flex-col items-center justify-center h-80 text-green-500">
          <h1 className="text-4xl font-bold mb-2">Bem-vindo</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </main>
    </>
  )
}

