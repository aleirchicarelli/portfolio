import React from "react";
import Robotron from '../../assets/Robotron.png'
import Barbearia from '../../assets/Barbearia.png'
import AluraMidi from '../../assets/AluraMidi.png'
import Tabuada from '../../assets/Tabuada.png'
import Portfolio from '../../assets/Portfolio.png'
import CalculaIdade from '../../assets/CalculaIdade.png'

import * as S from "./styles";

const Project = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TextContent>
          <S.Title>Meus projetos </S.Title>

          <S.ContentGallery>
            <S.Responsive>
              <S.Gallery>
                <S.LinkCard target="_blank" href="https://robotron2000.netlify.app/">
                  <S.Image src={Robotron} />
                </S.LinkCard>
                <S.Description>Robotron</S.Description>
              </S.Gallery>
            </S.Responsive>
            
            <S.Responsive>
              <S.Gallery>
                <S.LinkCard target="_blank" href='https://barbeariadofernandinho.netlify.app/'>
                  <S.Image src={Barbearia} />
                </S.LinkCard>
                <S.Description>Barbearia</S.Description>
              </S.Gallery>
            </S.Responsive>

            <S.Responsive>
              <S.Gallery>
                <S.LinkCard target="_blank" href='https://aluramidis.netlify.app/'>
                  <S.Image src={AluraMidi} />
                </S.LinkCard>
                <S.Description>AluraMidi</S.Description>
              </S.Gallery>
            </S.Responsive>

            <S.Responsive>
              <S.Gallery>
                <S.LinkCard target="_blank" href='https://tabuada-matematica.netlify.app/'>
                  <S.Image src={Tabuada} />
                </S.LinkCard>
                <S.Description>Tabuada</S.Description>
              </S.Gallery>
            </S.Responsive>

            <S.Responsive>
              <S.Gallery>
                <S.LinkCard target="_blank" href='https://calculoidade.netlify.app/'>
                  <S.Image src={CalculaIdade} />
                </S.LinkCard>
                <S.Description>Calculo de idade</S.Description>
              </S.Gallery>
            </S.Responsive>
            
            <S.Responsive>
              <S.Gallery>
                <S.LinkCard target="_blank" href='https://github.com/aleirchicarelli/portfolio'>
                  <S.Image src={Portfolio} />
                </S.LinkCard>
                <S.Description>Código do portfólio</S.Description>
              </S.Gallery>
            </S.Responsive>

          </S.ContentGallery>

        </S.TextContent>
      </S.Content>
    </S.Container>
  )
}

export default Project