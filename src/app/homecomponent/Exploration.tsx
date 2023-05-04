"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
`;

const InputField = styled.input`
  text-align: center;
  font-size: 1.5rem;
  color: white;
  width: 15rem;
  height: 2rem;
  border: none;
  border-bottom: white;
  background: none;
  &:focus {
    outline: none;
    boder-bottom: white;
  }
  &::placeholder {
    color: white;
  }
`;

export default function Exploration() {
  return (
    <Wrapper>
      <Title>아 뭐먹지?</Title>
      <br />
      <InputField type="text" placeholder="현재 위치를 입력하세요" />
    </Wrapper>
  );
}
