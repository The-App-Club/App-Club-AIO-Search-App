import styled from '@emotion/styled';

const SearchArea = styled.aside`
  aside {
    width: 15em;
  }

  @media only screen and (max-width: 40em) {
    aside {
      width: 100%;
      margin-bottom: 2em;
    }
  }
`;

const Form = styled.form``;

const FormLabel = styled.label`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'Hind', sans-serif;
  text-transform: uppercase;
  margin-bottom: 0.2em;
`;

const FormInputBox = styled.input`
  width: 100%;
  font-size: 1em;
  background: none;
  padding: 0.8em 1em;
  border: solid 3px #5f4b8b;
  outline: none;
  border-radius: 0.4em;

  &:focus {
    border: solid 3px #5e1dec;
    box-shadow: 0 0 6px #5e1dec;
  }
`;

const SearchBox = ({ query, onSearch }) => {
  return (
    <SearchArea>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        <FormLabel>Search</FormLabel>
        <FormInputBox type="text" value={query} onChange={onSearch} />
      </Form>
    </SearchArea>
  );
};

export { SearchBox };
