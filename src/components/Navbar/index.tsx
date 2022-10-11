import React from 'react';
import foto from '../../assets/Aleir.jpg'
import { ItemList, Imagem, Container } from './styles'
import { FaUserAlt, FaRegFileCode, FaHome, FaRegEnvelope } from 'react-icons/fa'
import { BrowserRouter, useHistory } from 'react-router-dom';


const Navbar = () => {
  const history = useHistory()
  return (
    <Container>
      <Imagem src={foto} />
      <BrowserRouter>
        <ItemList onClick={() => history.push('/')}>
          <FaHome size={40} fill='#1E90FF' />
          <p>Inicio</p>
        </ItemList>

        <ItemList onClick={() => history.push("/about")}>
          <FaUserAlt size={40} fill='#1E90FF' />
          <p>Sobre</p>
        </ItemList>

        <ItemList onClick={() => history.push("/projects")}>
          <FaRegFileCode size={40} fill='#1E90FF' />
          <p>Projetos</p>
        </ItemList >

        <ItemList onClick={() => history.push("/contact")} >
          <FaRegEnvelope size={40} fill='#1E90FF' />
          <p>Contatos</p>
        </ ItemList >
    </BrowserRouter >
    </Container >
  )
}

export default Navbar