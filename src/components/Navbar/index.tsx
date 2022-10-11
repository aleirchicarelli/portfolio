import React from 'react';
import foto from '../../assets/Aleir.jpg'
import { Button, Imagem, Container } from './styles'
import { FaUserAlt, FaRegFileCode, FaHome, FaRegEnvelope } from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom';


const Navbar = () => {
  return (
    <Container>
      <Imagem src={foto} />
      <BrowserRouter>
        <Button to="/">
          <FaHome size={40} fill='#1E90FF' />
          <p>Inicio</p>
        </Button>

        <Button to="/about">
          <FaUserAlt size={40} fill='#1E90FF' />
          <p>Sobre</p>
        </Button>

        <Button to="/projects">
          <FaRegFileCode size={40} fill='#1E90FF' />
          <p>Projetos</p>
        </Button>

        <Button to="/contact">
          <FaRegEnvelope size={40} fill='#1E90FF' />
          <p>Contatos</p>
        </Button>
      </BrowserRouter>
    </Container>
  )
}

export default Navbar