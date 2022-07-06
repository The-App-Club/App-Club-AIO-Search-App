import { CharaItem } from './CharaItem';

const Row = ({ index, style, character }) => {
  const { name, company, species, thumb } = character;
  return (
    <div style={style}>
      <CharaItem
        key={index}
        name={name}
        company={company}
        species={species}
        thumb={thumb}
      ></CharaItem>
    </div>
  );
};

export { Row };
