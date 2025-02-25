import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Eduardo</Name>
          <Function>Sou mid/toplaner lol</Function>
          <Intro>Prata 2 - 3 season 2022 mains (irelia, zed, riven)
            Sou muito bom no lol e diferente dos pratas eu sei jogar
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}
