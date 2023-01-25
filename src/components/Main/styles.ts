import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  /* background-color: #06092b; */
  background-color: #373a5e;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const Logo = styled.img`
  width: min(35rem, 100%);
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin: 3rem;
  width: min(35rem, 100%);
`;
