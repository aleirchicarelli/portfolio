import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 100vh;
  background: #000;
  
`

export const Button = styled(Link)`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  text-decoration: none;
  text-align: center;
`
export const Imagem = styled.img`
  height: auto;
  width: 80%;
  border-radius: 50%;
`
