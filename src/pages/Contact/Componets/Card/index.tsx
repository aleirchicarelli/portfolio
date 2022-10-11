import React from 'react'
import * as S from './styles'

interface CardProps {
  icon: string
  link: string
  text: string
}

const Card = ({icon, link, text}:CardProps) => (
 <S.Container href={link} target="_blank">
  <S.Icon src={icon} />
  <S.Text>
    {text}
  </S.Text>
 </S.Container>
)

export default Card