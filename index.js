console.log('d')

const decodeQuery = q =>
  q.substring(2)

const getElement = id =>
  document.getElementById(id)

const showElement = (elem) => {
  // elem.style.display = 'block'
  elem.style.opacity = 1
}

const hideElement = (elem) => {
  elem.style.display = 'none'
}

reloadWithQueryStringVars({"search": escape( $("#someId").val() )});

function reloadWithQueryStringVars(queryStringVars) {
  const existingQueryVars = location.search ? location.search.substring(1).split("&") : []
  const currentUrl = location.search ? location.href.replace(location.search, "") : location.href
  const newQueryVars = {}
  const newUrl = currentUrl + "?"

  if (existingQueryVars.length > 0) {
    for (var i = 0; i < existingQueryVars.length; i++) {
      var pair = existingQueryVars[i].split("=");
      newQueryVars[pair[0]] = pair[1];
    }
  }
  if (queryStringVars) {
    for (var queryStringVar in queryStringVars) {
      newQueryVars[queryStringVar] = queryStringVars[queryStringVar];
    }
  }
  if (newQueryVars) {
    for (var newQueryVar in newQueryVars) {
      newUrl += newQueryVar + "=" + newQueryVars[newQueryVar] + "&";
    }
    newUrl = newUrl.substring(0, newUrl.length - 1);
    window.location.href = newUrl;
  } else {
    window.location.href = location.href;
  }
}

const main = () => {
  if (window.location.search) {
    const msg = decodeQuery(window.location.search)
    console.log(msg)
  } else {
    showElement(getElement('cookieForm'))
    console.log('none')
  }

}

main()
