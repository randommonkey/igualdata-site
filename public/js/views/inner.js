function setSpacer () {
  const navHeight = document.querySelector('nav').offsetHeight
  document.querySelector('.spacer').style.height = `${navHeight}px`
}

$(document).ready(function () {
  setSpacer()
  window.addEventListener('resize', function () {
    setSpacer()
  })
})