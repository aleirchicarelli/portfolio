import styled from 'styled-components'

export const Container = styled.nav`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 100vh;
  background: #000;
  
`

export const ItemList = styled.li`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  @media (max-width: 600px) {
   & > p {
    font-size: 14px;
   }

   & > svg {
    height: 25px;
   }
  }
`
export const Imagem = styled.img`
  height: auto;
  width: 80%;
  border-radius: 50%;
`
