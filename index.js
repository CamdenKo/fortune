
const getElement = id =>
  document.getElementById(id)

const showElement = (elem) => {
  elem.style.opacity = 1
}

const decodeString = str =>
  str
    .split('%20')
    .join(' ')

const queryMsgToObj = msg =>
  msg
    .split('&')
    .reduce((accum, cur) => {
      const [l, r] = cur.split('=')
      accum[l] = decodeString(r)
      return accum
    }, {})

const processQuery = q =>
  queryMsgToObj(q.substring(1))

const hideElement = (elem) => {
  elem.style.display = 'none'
}

const main = () => {
  if (window.location.search) {
    const msg = processQuery(window.location.search)
    console.log(msg)
  } else {
    showElement(getElement('cookieForm'))
    console.log('none')
  }

}

main()
