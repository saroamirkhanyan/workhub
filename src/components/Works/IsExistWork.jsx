import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../../styled/StyledElements'
import GetSearchQueryParam from './ListenersForLoadCards/GetSearchQueryParam'

function IsExistWork() {
  const isExist = useSelector((state) => state.WorkCards.isExist)
  const searchQuery = GetSearchQueryParam()
  return (
    <>
      {!isExist && (
        <Text size="30" align="center">
          "{searchQuery}" թեմայով աշխատանքներ չեն գտնվել
        </Text>
      )}
    </>
  )
}

export default IsExistWork
