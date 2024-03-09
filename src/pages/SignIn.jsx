// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 10px;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  cursor: pointer;
  font-weight: 500;
  border: none;
  border-radius: 3px;
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 40px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <SubTitle>to continue to WeTube</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>Sign in</Button>

        <Title>or</Title>

        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
