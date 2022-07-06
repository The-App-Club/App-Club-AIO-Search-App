import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode, useState, useEffect } from 'react';
import { css } from '@emotion/css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Input, theme } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { stripHtml, unicodeToChar, coolParse } from './plugins';

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [isError, setIsError] = useState(false);

  const handleClick = async e => {
    // nextjsのssrでないと動かない
    // https://gist.github.com/irbull/42f3bd7a9db767ce72a770ded9a5bdd1
    try {
      const response = await fetch(
        `https://www.google.com/complete/search?q=${searchWord}&client=gws-wiz&xssi=t`,
        {
          mode: 'no-cors',
        }
      );
      const buffer = await response.arrayBuffer();
      console.log(buffer);
      // const data = unicodeToChar(buffer.toString('latin1'));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchWord(value);
  };

  return (
    <Box
      position={'relative'}
      className={css`
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        @media screen and (max-width: 768px) {
          max-width: 100%;
          padding: 0 20px 0;
        }
      `}
    >
      <Box
        className={css`
          position: fixed;
          top: 10px;
          right: 10px;
        `}
      >
        <ColorModeSwitcher />
      </Box>
      <Box
        className={css`
          display: grid;
          place-items: center;
          height: 100vh;
        `}
      >
        <FormControl
          isInvalid={isError}
          className={css`
            position: relative;
          `}
        >
          <FormLabel htmlFor="search-box">Search Word</FormLabel>
          <Input
            id="search-box"
            type="text"
            value={searchWord}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>
              Enter word you'd like to search from web.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Include invalid words...</FormErrorMessage>
          )}
          <Box
            marginTop={10}
            className={css`
              display: flex;
              justify-content: flex-end;
              align-items: center;
            `}
          >
            <Button colorScheme="blue" onClick={handleClick}>
              Search
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}
ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
