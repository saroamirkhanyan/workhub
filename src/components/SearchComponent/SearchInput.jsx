import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { SearchCards } from '../../redux/WorkCard-reducer'
import { Input } from '../../styled/StyledElements'

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
  const dispatch = useDispatch()
  const [searchCardsTimeout, setSearchCardsTimeout] = useState(null)

  const handleOnChange = (event) => {
    clearTimeout(searchCardsTimeout)
    setSearchCardsTimeout(
      setTimeout(() => {
        if (event.target.value) {
          const count = Math.round(window.innerHeight / 150)
          dispatch(SearchCards({ query: event.target.value, page: 1, count }))
        }
      }, 2000)
    )
  }

  return (
    <SearchInputStyled
      placeholder="Փնտրել"
      maxLength="45"
      onChange={handleOnChange}
    />
  )
}

export default SearchInput
