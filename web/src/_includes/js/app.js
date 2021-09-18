const toggleMenu = function() {
  const $header = document.getElementsByClassName('js-header')[0]
  const isOpen = $header.classList.contains('is-open')

  isOpen ? $header.classList.remove('is-open') : $header.classList.add('is-open')
  this.setAttribute('aria-expanded', !isOpen)
}

function domReady() {
  const $button = document.getElementsByClassName('js-header-button')[0]
  
  $button.addEventListener('click', toggleMenu)
}

window.onload = domReady
