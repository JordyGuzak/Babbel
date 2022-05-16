import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import colors from "../constants/colors";
import { color, onColor, StyledContainer, borderRadius } from "../styles";


const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0 0 2.5rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-shadow: 0 0 2px ${color};
`

const Form = styled.div`
    max-width: 400px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin: 0 0 2rem 0;
    background-color: transparent;
    color: ${onColor};
    border: 1px solid ${onColor};
    border-radius: ${borderRadius.small};
    font-size: 1.5rem;
    padding: 1rem 1rem;
    outline: none;
    opacity: 0.87;

    &:focus {
        border: 1px solid ${colors.primary};
        opacity: 1;
    }
`

const Password = styled(Input).attrs({ type: "password" })`
`

const Login: NextPage = () => {

    return (
        <Main>
            <Form>
                <Title>Login</Title>
                <Input placeholder="email" variant='default' />
                <Password placeholder="password" variant='default'/>
            </Form>
        </Main>
    )
}

export default Login;