import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  background-color: #5e1dec;
  padding: 1em 0;
  margin-top: 2em;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledParagraph = styled.p``;

const StyledAnchor = styled.a`
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <StyledParagraph>
          Images from{' '}
          <StyledAnchor href="http://www.cc.com/shows/futurama">
            Futurama
          </StyledAnchor>
        </StyledParagraph>
      </FooterContainer>
    </StyledFooter>
  );
};

export { Footer };
