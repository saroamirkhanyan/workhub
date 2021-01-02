import { useLocation } from 'react-router-dom'

function GetSearchQueryParam() {
  const url = new URLSearchParams(useLocation().search)
  return url.get('searchQuery')
}

export default GetSearchQueryParam
