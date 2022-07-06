import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, #5e1dec, #0298d5);
  padding: 2em 0;
  margin-bottom: 3em;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderSentence = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 4em;
  font-weight: 700;
  color: white;
  font-family: 'Hind', sans-serif;
  margin: 0;
  @media only screen and (max-width: 50em) {
    h1 {
      font-size: 7vw;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderSentence>Futurama Characters</HeaderSentence>
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
