import styled from "styled-components";

export const Content = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 2rem 2rem;

  @media screen  and (max-width: 1080px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen  and (max-width: 650px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
  }

  @media screen  and (max-width: 430px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
