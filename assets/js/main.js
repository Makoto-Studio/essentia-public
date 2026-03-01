/* essentia — main.js */

(function () {
  'use strict';

  // Header: backdrop blur on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const heroEl = document.querySelector('.hero') || document.body;
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:1px;left:0;width:1px;height:1px;pointer-events:none';
    document.body.prepend(sentinel);

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    headerObserver.observe(sentinel);
  }

  // Reveal on scroll: .reveal and .reveal-stagger elements
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  }
})();
