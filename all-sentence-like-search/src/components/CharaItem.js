import styled from '@emotion/styled';

const StyledList = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 1em;
`;

const CharaThumb = styled.span`
  width: 4em;
  height: 4em;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  border-radius: 0.4em;
  margin-right: 0.6em;
`;

const CharaMeta = styled.ul`
  list-style: none;
`;

const CharaMetaItem = styled.li`
  margin-bottom: 0.2em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CharaMetaItemHeader = styled.strong``;

const CharaItem = ({ name, company, species, thumb }) => {
  return (
    <StyledList key={name}>
      <CharaThumb
        style={{
          backgroundImage: `url(${thumb})`,
        }}
      />
      <CharaMeta>
        <CharaMetaItem>
          <CharaMetaItemHeader>Name:</CharaMetaItemHeader> {name}
        </CharaMetaItem>
        <CharaMetaItem>
          <CharaMetaItemHeader>Company:</CharaMetaItemHeader> {company}
        </CharaMetaItem>
        <CharaMetaItem>
          <CharaMetaItemHeader>Species:</CharaMetaItemHeader> {species}
        </CharaMetaItem>
      </CharaMeta>
    </StyledList>
  );
};

export { CharaItem };
