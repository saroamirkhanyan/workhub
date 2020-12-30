import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as queryString from 'query-string';
import { LoadCardsThunk } from '../../redux/WorkCard-reducer';
import { Input } from '../../styled/StyledElements';
const SearchInputStyled = styled(Input).attrs((props) => ({
  maxLength: props.maxLength,
}))`
  height: 55%;
  width: 90%;
  border-left: 2.5px solid ${(props) => props.theme.btnCol};
  padding-left: 2%;
  font-size: 16px;
`;

function SearchInput(props) {
  const dispatch = useDispatch();
  const [searchCardsTimeout, setSearchCardsTimeout] = useState(null);
  let history = useHistory();
  let location = useLocation();
  let [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const limit = Math.round(window.innerHeight / 150);
    const newSearchQuery = queryString.parse(location.search).searchQuery;
    setSearchQuery(newSearchQuery);
    if (searchQuery) {
      dispatch(LoadCardsThunk({ searchQuery, page: 1, limit }));
    }
  }, [location, dispatch]);

  const SearchCards = useCallback(
    (text) => {
      if (text) {
        const encodedText = encodeURIComponent(text);
        history.push(`/?searchQuery=${encodedText}`);
      }
    },
    [history]
  );

  const handleOnChange = (event) => {
    const targetValue = event.target.value;
    clearTimeout(searchCardsTimeout);
    setSearchQuery(targetValue);
    setSearchCardsTimeout(
      setTimeout(() => {
        clearTimeout(searchCardsTimeout);
        SearchCards(targetValue);
      }, 2000)
    );
  };
  const onEnterClick = (event) => {
    if (event.keyCode === 13) {
      const targetValue = event.target.value;
      clearTimeout(searchCardsTimeout);
      SearchCards(targetValue);
    }
  };
  return (
    <SearchInputStyled
      placeholder='Փնտրել'
      maxLength='45'
      value={searchQuery}
      onChange={handleOnChange}
      onKeyDown={onEnterClick}
    />
  );
}

export default SearchInput;
