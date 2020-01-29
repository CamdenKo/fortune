const combineQuery = queryArr =>
  queryArr[0] + '=' + queryArr[1]

const reloadWithQueryStringVars = (queryStringVars) => {
  if (!document.getElementById('cookieInput').value) return false
  const currentUrl = location.href.includes('?') ?
    location.href.split('?')[0] :
    location.href

  const toPostpend = [['fortune', document.getElementById('cookieInput').value]]
  for (const param in queryStringVars) {
    toPostpend.push([param, queryStringVars[param]])
  }
  const newUrl = currentUrl + '?' +
    (toPostpend.reduce(
      (a, b) => a + '&' + combineQuery(b),
      '',
    ).substring(1))
  window.location.href = newUrl
  return false
}
