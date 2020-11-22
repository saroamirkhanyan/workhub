import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../../../../styled/StyledElements'
import CardTitle from './CardTitle'

const JobCardStyled = styled.section`
  background-color: ${(props) => props.theme.secondaryBg};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  row-gap: 10px;
`

const CardButton = styled(Button)`
  padding: 5px 10px;
`

const CardWrapper = styled(Wrapper)`
  row-gap: 15px;
`

const CardHashtegs = styled.p`
  font-size: 15px;
`

function JobCard({ jobText, jobHashtags, jobSalary }) {
  return (
    <JobCardStyled>
      <CardTitle>{jobText}</CardTitle>
      <CardWrapper justify="space-between" align="center">
        <CardHashtegs>{jobHashtags}</CardHashtegs>
        <CardButton>{jobSalary}</CardButton>
      </CardWrapper>
    </JobCardStyled>
  )
}

export default JobCard
