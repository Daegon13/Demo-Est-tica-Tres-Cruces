const treatments = [
  {
    title: 'Radiofrecuencia facial',
    copy: 'Una opción de cuidado facial no invasiva para quienes buscan complementar su rutina estética y trabajar el aspecto de la piel. Consultanos y te contamos cómo se realiza y si puede ser una opción adecuada para lo que querés trabajar.',
    cta: 'Consultar si es para mí',
    href: 'https://wa.me/59892451802?text=Hola%2C%20quer%C3%ADa%20consultar%20por%20radiofrecuencia%20facial.',
    image: 'assets/images/tratamiento-radiofrecuencia-facial.webp',
    imageAlt: 'Imagen ilustrativa de una sesión de radiofrecuencia facial',
    featured: true
  },
  {
    title: '¿No sabés cuál elegir?',
    copy: 'Contanos qué zona te gustaría trabajar y qué estás buscando. Te ayudamos a conocer las opciones disponibles.',
    cta: 'Hacer una consulta',
    href: 'https://wa.me/59892451802?text=Hola%2C%20quer%C3%ADa%20hacer%20una%20consulta%20sobre%20los%20tratamientos%20de%20Est%C3%A9tica%20Tres%20Cruces.'
  }
];

const grid = document.querySelector('#treatments-grid');
if (grid) {
  grid.innerHTML = treatments.map((t) => `
    <article class="treatment-card ${t.featured ? 'featured' : 'secondary'} reveal">
      ${t.image ? `<div class="treatment-media"><img src="${t.image}" alt="${t.imageAlt || ''}" width="800" height="600" loading="lazy" decoding="async"></div>` : (t.featured ? '<div class="treatment-media treatment-fallback" aria-hidden="true"></div>' : '')}
      <div class="treatment-content">
        ${t.featured ? '<span class="eyebrow"><span></span> Tratamiento destacado</span>' : ''}
        <h3>${t.title}</h3>
        <p>${t.copy}</p>
        <a class="text-link" href="${t.href}" target="_blank" rel="noopener noreferrer">${t.cta} <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  `).join('');
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('visible'));
}
