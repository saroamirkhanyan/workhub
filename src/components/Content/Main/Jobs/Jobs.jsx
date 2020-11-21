import React from 'react'
import styled from 'styled-components'
import JobCard from './JobCard'

const Main = styled.main`
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: repeat(12, 1fr);
`
const Article = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 12;
  grid-row-gap: 30px;
`

function Jobs() {
  return (
    <Main>
      <Article>
        <JobCard
          jobText="we r"
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9959֏"
        />
        <JobCard
          jobText="we need junior c++ and java and python and javaSript good dev need junior c++ and java anded javaSr "
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9699֏"
        />
        <JobCard
          jobText="we need html good developer."
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9֏"
        />
        <JobCard
          jobText="we need html good developer."
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9֏"
        />
        <JobCard
          jobText="we need html good developer."
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9֏"
        />
        <JobCard
          jobText="we need html good developer."
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9֏"
        />
        <JobCard
          jobText="we need html good developer."
          jobHashtags="#it,#pntrvumehariv"
          jobSalary="9֏"
        />
      </Article>
    </Main>
  )
}

export default Jobs
