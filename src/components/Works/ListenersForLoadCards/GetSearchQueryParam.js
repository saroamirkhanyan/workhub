import { useLocation } from 'react-router-dom'

function GetSearchQueryParam() {
  const url = new URLSearchParams(useLocation().search).get('searchQuery')

  return url
}

export default GetSearchQueryParam
