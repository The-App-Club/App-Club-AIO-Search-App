import Fuse from 'fuse.js';
import React, { useState } from 'react';
import characters from '../store/characters.json';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CharaItemList } from '../components/CharaItemList';
import { SearchBox } from '../components/SearchBox';
import { Container } from '../components/Container';

function Home() {
  const [query, updateQuery] = useState('');

  const fuse = new Fuse(characters, {
    keys: ['name', 'company', 'species'],
    includeScore: true,
  });

  const results = fuse.search(query);
  const characterResults = query
    ? results.map((character) => character.item)
    : characters;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <>
      <Header></Header>
      <Container>
        <CharaItemList characterResults={characterResults}></CharaItemList>
        <SearchBox query={query} onSearch={onSearch}></SearchBox>
      </Container>
      <Footer></Footer>
    </>
  );
}

export { Home };
