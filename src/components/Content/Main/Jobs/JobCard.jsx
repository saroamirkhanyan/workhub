import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../styled/StyledElements'

const JobCardStyled = styled.section`
  width: 100%;
  height: 170px;
  background-color: ${(props) => props.theme.primaryBg};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 17px;
  height: 70%;
`
const CardButton = styled(Button)`
  font-size: 18px;
  background-color: ${(props) => props.theme.btnCol};
  min-width: 50px;
  padding: 5px 10px;
`

const CardHashtegs = styled.div`
  margin: auto 0;
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
