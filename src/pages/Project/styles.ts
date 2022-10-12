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
export const ContentGallery = styled.div`
  display: grid;
  grid-template-columns: auto auto auto; 
  gap: 20px;

  @media (max-width: 900px) {
  grid-template-columns: auto auto;
 }

 @media (max-width: 600px) {
  height: 100vh;
  margin-bottom: 20px;
  overflow: scroll;
  grid-template-columns: auto;
 }
`

export const Responsive = styled.div`
  padding: 0 6px;
  float: left;
`

export const Gallery = styled.div`
  border: 1px solid #ccc;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const LinkCard = styled.a`

`

export const Image = styled.img`
  width:100%;
`

export const Description = styled.div`
padding: 15px;
  text-align: center;
  color: #fff;
`
