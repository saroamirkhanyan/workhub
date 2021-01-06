import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../styled/StyledElements'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RESET_CARDS, LoadCardsAction } from '../../redux/WorkCard-reducer'
import GetSearchQueryParam from '../Works/ListenersForLoadCards/GetSearchQueryParam'

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
  const dispatch = useDispatch()
  const SearchQuery = GetSearchQueryParam()
  const [value, setValue] = useState(SearchQuery || '')

  const SearchCards = (value) => {
    if (value !== '' && value !== SearchQuery) {
      clearTimeout(searchCardsTimeout)
      history.push(`/?searchQuery=${value}`)
      dispatch(LoadCardsAction({ docs: [] }, RESET_CARDS))
    }
  }

  const handleOnChange = (event) => {
    clearTimeout(searchCardsTimeout)
    setValue(event.target.value)
    console.log(value)
    const timeOut = setTimeout(() => {
      SearchCards(event.target.value)
    }, 2000)

    setSearchCardsTimeout(timeOut)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    SearchCards(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <SearchInputStyled
        placeholder="Փնտրել"
        maxLength="45"
        value={value}
        onChange={handleOnChange}
      />
    </form>
  )
}

export default SearchInput
