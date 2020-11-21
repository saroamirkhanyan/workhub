import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../styled/StyledElements'

const JobCardStyled = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.primaryBg};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`

const CardTitle = styled.h1`
  grid-column: 1/3;
  font-weight: 600;
  font-size: 17px;
`
const CardButton = styled(Button)`
  padding: 5px 10px;
  align-self: center;
  justify-self: end;
`

const CardHashtegs = styled.p`
  align-self: center;
`

function JobCard({ jobText, jobHashtags, jobSalary }) {
  return (
    <JobCardStyled>
      <CardTitle>{jobText}</CardTitle>
      <CardHashtegs>{jobHashtags}</CardHashtegs>
      <CardButton>{jobSalary}</CardButton>
    </JobCardStyled>
  )
}

export default JobCard
