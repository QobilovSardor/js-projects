const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(accordionHeader => {

  accordionHeader.addEventListener('click', () => {
    if (accordionHeader.classList.contains('is-open')) {
      accordionHeader.classList.remove('is-open')
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll('.is-open');
      accordionTitlesWithIsOpen.forEach(item => {
        item.classList.remove('is-open')
      })
      accordionHeader.classList.add('is-open')
    }
  })
})