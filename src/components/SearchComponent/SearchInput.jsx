import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { LoadCardsThunk } from '../../redux/WorkCard-reducer'
import { Input } from '../../styled/StyledElements'
import { useHistory, useLocation, useParams } from 'react-router-dom'

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
  let history = useHistory()
  let location = useLocation()
  let params = useParams()
  useEffect(() => {
    const limit = Math.round(window.innerHeight / 150)
    console.log(location, params)
    debugger
    // dispatch(LoadCardsThunk({ searchQuery: location, page: 1, limit }))
  }, [location, dispatch])

  const SearchCards = useCallback(
    (text) => {
      if (text) {
        console.log(text)
        history.push(`/works?searchQuery=${text}`)
      }
    },
    [history]
  )

  const handleOnChange = (event) => {
    const targetValue = event.target.value
    clearTimeout(searchCardsTimeout)
    setSearchCardsTimeout(
      setTimeout(() => {
        clearTimeout(searchCardsTimeout)
        SearchCards(targetValue)
      }, 2000)
    )
  }
  const onEnterClick = (event) => {
    if (event.keyCode === 13) {
      const targetValue = event.target.value
      clearTimeout(searchCardsTimeout)
      SearchCards(targetValue)
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
