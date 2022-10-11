import styled from "styled-components";
import Fundo from '../../assets/fundo.jpg'

export const Container = styled.section`
  width: 100%;
  background-image: url(${Fundo});
  height: 100%;
`

export const Content = styled.div`
  background-color: rgba(0, 0, 0, .7);
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const Title = styled.h1`
  color: #1E90FF;
  font-size: 50px;
  line-height: 0%;

`

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 30px;
  line-height: 0%;
`