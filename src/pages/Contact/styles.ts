import styled from "styled-components";
import Fundo from '../../assets/fundo.jpg'

export const Container = styled.section`
  width: 100%;
  background-image: url(${Fundo});
  height: 100%;
`

export const Content = styled.div`
  background-color: rgba(0, 0, 0, .9);
  width:100%;
  height: 100%;
  
`

export const TextContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const Title = styled.h1`
  color: #1E90FF;
  font-size: 30px;

`

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 14px;
`