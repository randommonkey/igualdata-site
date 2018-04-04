const nav = document.querySelector('nav')

document.addEventListener('DOMContenLoaded', () => {
  const scroller = new SweetScroll({ duration: 500 })
  affixed()
})

document.addEventListener('scroll', (e) => {
  affixed()
})

function affixed () {
  const scrollValue = window.scrollY
  if (scrollValue > 220) {
    nav.classList.add('affixed')
  } else if (scrollValue === 0) {
    nav.classList.remove('affixed')
  }
}