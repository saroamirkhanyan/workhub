import React from 'react'
import styled from 'styled-components'
import { Device } from '../../../../styled/DeviceBreackpoints'
import { Button, Wrapper } from '../../../../styled/StyledElements'

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

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 17px;
  padding: 10px;
  border-radius: 15px;
  @media ${Device.mobileM} {
    background-color: ${(props) => props.theme.primaryBg};
  }
`
const CardButton = styled(Button)`
  padding: 5px 10px;
`

const CardWrapper = styled(Wrapper)`
  row-gap: 15px;
`
const CardHashtegs = styled.a``

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
