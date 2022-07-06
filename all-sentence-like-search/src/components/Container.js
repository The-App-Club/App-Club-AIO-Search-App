import styled from '@emotion/styled';

const StyledMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1em;

  @media only screen and (max-width: 40em) {
    main {
      flex-direction: column-reverse;
    }
  }
`;

const Container = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export { Container };
