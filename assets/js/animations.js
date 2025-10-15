jQuery(document).ready(function ($) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.isIntersecting ? entry.target.classList.add('with-animation-active') : entry.target.classList.remove('www'))
  }, { rootMargin: "-5px 0px -100px 0px" })

  // main
  if (document.querySelector('.main.with-animation')) {

    const arrayClasses = [
      ".main.with-animation .blur-terracotta",
      ".main.with-animation .blur-blue",
      ".main.with-animation .blur-green"
    ]
    arrayClasses.forEach((str, idx) => {
      if (document.querySelector(str)) {
        const btn = document.querySelectorAll(str)
        btn.forEach(el => observer.observe(el))
      }
    })

  }

});