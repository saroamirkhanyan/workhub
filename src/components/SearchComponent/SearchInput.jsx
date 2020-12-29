import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { LoadCardsThunk } from '../../redux/WorkCard-reducer'
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
  const dispatch = useDispatch()
  const [searchCardsTimeout, setSearchCardsTimeout] = useState(null)
  const [value, setValue] = useState('')
  const [isDispatched, setIsDispatched] = useState(false)
  let history = useHistory()

  const SearchCards = useCallback(
    (text) => {
      if (!isDispatched) {
        const limit = Math.round(window.innerHeight / 150)
        dispatch(LoadCardsThunk({ searchQuery: text, page: 1, limit }))
        console.log(text)
        history.push(`/works/${text}`)
        setIsDispatched(true)
      }
    },
    [dispatch, history, isDispatched]
  )

  const handleOnChange = (event) => {
    setValue(event.target.value)
    clearTimeout(searchCardsTimeout)
    setSearchCardsTimeout(
      setTimeout(() => {
        if (value) {
          SearchCards(value)
        }
      }, 2000)
    )
  }
  const onEnterClick = (event) => {
    if (event.keyCode === 13) {
      SearchCards(value)
    }
  }
  return (
    <SearchInputStyled
      placeholder="Փնտրել"
      maxLength="45"
      onChange={handleOnChange}
      onKeyDown={onEnterClick}
      value={value}
    />
  )
}

export default SearchInput
