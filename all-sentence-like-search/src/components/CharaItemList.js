import styled from '@emotion/styled';
import { FixedSizeList as List } from 'react-window';
import { Row } from './Row';

const StyledList = styled.ul`
  list-style: none;
  flex-grow: 1;
`;

const CharaItemList = ({ characterResults }) => {
  return (
    <List
      height={window.innerHeight / 2}
      itemCount={characterResults.length}
      itemSize={100}
      width={window.innerWidth / 4}
    >
      {({ index, style }) => {
        return (
          <Row
            key={index}
            index={index}
            style={style}
            character={characterResults[index]}
          ></Row>
        );
      }}
    </List>
  );
};

export { CharaItemList };
