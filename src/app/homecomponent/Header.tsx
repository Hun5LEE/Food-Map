// 5.3 - 메인페이지의 Header

"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1028px;
  height: 5rem;
  color: white;
`;
const Logo = styled.div`
  margin-left: 1rem;
`;

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo>AmomokZ</Logo>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "1rem" }}>My Page</div>
          <div style={{ marginRight: "1rem" }}>Login</div>
        </div>
      </Container>
    </Wrapper>
  );
}
