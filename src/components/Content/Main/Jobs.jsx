import React from 'react'
import styled from 'styled-components'
import Job from './JobCard'

const Main = styled.main`
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: repeat(12, 1fr);
`
const Article = styled.article`
  display: grid;
  grid-column: 2 / 12;
  grid-row-gap: 30px;
`

function Jobs() {
  return (
    <Main>
      <Article>
        <Job />
        <Job />
        <Job />
      </Article>
    </Main>
  )
}

export default Jobs
