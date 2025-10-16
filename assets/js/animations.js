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





  // *******************
  // changeColorAnimated
  changeColorAnimated("Это слово нужно", ".descr", "#ff7043");
  changeColorAnimated("добро", ".turns .h2", "#2eb99c");

  function changeColorAnimated(text, className, color) {
    const elements = document.querySelectorAll(className);
    if (!elements.length) return;

    // Уникальный идентификатор для каждого слова
    const uniqueId = 'anim-' + Math.random().toString(36).substr(2, 9);

    elements.forEach(el => {
      const regex = new RegExp(`(${escapeRegExp(text)})`, 'gi');
      el.innerHTML = el.innerHTML.replace(regex, match => {
        return match
          .split('')
          .map((char, index) => {
            if (char === ' ') return '&nbsp;';
            return `<span class="${uniqueId}" data-delay="${index * 0.1}s">${char}</span>`;
          })
          .join('');
      });
    });

    // Добавляем стили для каждого слова отдельно
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes ${uniqueId}-anim {
        0% { color: inherit; }
        50% { color: ${color}; }
        100% { color: ${color}; }
      }
      .${uniqueId} {
        display: inline-block;
        color: inherit;
      }
      .${uniqueId}.animate {
        animation: ${uniqueId}-anim 1s ease forwards;
      }
    `;
    document.head.appendChild(style);

    // Наблюдаем за элементами и запускаем анимацию при появлении
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll(`.${uniqueId}`);
          spans.forEach(span => {
            const delay = span.getAttribute('data-delay');
            span.style.animationDelay = delay;
            span.classList.add('animate');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "-5px 0px -100px 0px" });

    elements.forEach(el => observer.observe(el));
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }




  // Expose functions to global scope if needed
  window.changeColorAnimated = changeColorAnimated;
  window.escapeRegExp = escapeRegExp;
});
