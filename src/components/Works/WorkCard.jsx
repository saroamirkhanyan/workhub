import React from 'react'
import styled from 'styled-components'
import CardHashtagsAndButton from './CardHashtagsAndButton'

const WorkCardStyled = styled.section`
  background-color: ${(props) => props.theme.primaryBg};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
const CardDescription = styled.h1`
  font-size: 18px;
  padding: 10px;
`

function WorkCard({ description, ...props }) {
  return (
    <WorkCardStyled>
      <CardDescription>{description}</CardDescription>
      <CardHashtagsAndButton {...props} />
    </WorkCardStyled>
  )
}

export default WorkCard
