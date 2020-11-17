import React from 'react'
import styled from 'styled-components'

const JobCardStyled = styled.section`
  width: 100%;
  height: 170px;
  background-color: ${(props) => props.theme.primaryBg};
  border-radius: 20px;
`

function JobCard() {
  return (
    <JobCardStyled>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo,
      facilis accusantium quos consequuntur libero architecto delectus dolorum
      consectetur nisi cumque veniam temporibus neque iure repudiandae eveniet
      corrupti, maiores impedit?
    </JobCardStyled>
  )
}

export default JobCard
