import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../styled/StyledElements'
import { useHistory } from 'react-router-dom'

const SearchInputStyled = styled(Input).attrs((props) => ({
  maxLength: props.maxLength,
}))`
  height: 55%;
  width: 90%;
  border-left: 2.5px solid ${(props) => props.theme.btnCol};
  padding-left: 2%;
  font-size: 16px;
`

function SearchInput() {
  const [searchCardsTimeout, setSearchCardsTimeout] = useState(null)
  let history = useHistory()

  const SearchCards = useCallback(
    (text) => {
      clearTimeout(searchCardsTimeout)
      history.push(`/searchQuery=${text}`)
    },
    [history, searchCardsTimeout]
  )

  const handleOnChange = (event) => {
    const value = event.target.value
    clearTimeout(searchCardsTimeout)
    setSearchCardsTimeout(
      setTimeout(() => {
        clearTimeout(searchCardsTimeout)
        SearchCards(value)
      }, 2000)
    )
  }
  const onEnterClick = (event) => {
    if (event.keyCode === 13) {
      SearchCards(event.target.value)
    }
  }

  return (
    <SearchInputStyled
      placeholder="Փնտրել"
      maxLength="45"
      onChange={handleOnChange}
      onKeyDown={onEnterClick}
    />
  )
}

export default SearchInput
