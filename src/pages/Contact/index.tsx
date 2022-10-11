import Card from "./Componets/Card";
import { ListContact } from './mock'
import { Container, Content, TextContent, Title, SubTitle } from "./styles";

const Contact = () => {
  return (
    <Container>
      <Content>
        <TextContent>
          <Title>Contatos</Title>
          <SubTitle></SubTitle>
          {
            ListContact.map((item) => (
              <Card icon={item.icon} link={item.link} text={item.text} />

            ))
          }
        </TextContent>
      </Content>
    </Container>
  )
}

export default Contact