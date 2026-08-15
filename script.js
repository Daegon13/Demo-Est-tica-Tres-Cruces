const treatments = [
  {
    number: '01',
    title: 'Radiofrecuencia facial',
    copy: 'Una opción estética orientada al cuidado de la apariencia del rostro. La conveniencia del tratamiento y la forma de trabajarlo dependen de tus objetivos y de la orientación personalizada del centro.',
    cta: 'Consultar por radiofrecuencia',
    href: 'https://wa.me/59892451802?text=Hola%2C%20quisiera%20consultar%20espec%C3%ADficamente%20por%20radiofrecuencia%20facial.',
    variant: 'primary'
  },
  {
    number: '02',
    title: '¿Buscás otra opción?',
    copy: 'La propuesta puede ampliarse con nuevos tratamientos a medida que el negocio confirme su catálogo. Por ahora, podés contarnos qué querés trabajar y recibir orientación directa.',
    cta: 'Contar mi objetivo',
    href: 'https://wa.me/59892451802?text=Hola%2C%20quiero%20contarles%20mi%20objetivo%20para%20que%20me%20orienten.',
    variant: 'secondary'
  }
];

const grid = document.querySelector('#treatments-grid');
if (grid) {
  grid.innerHTML = treatments.map((t) => `
    <article class="treatment-card ${t.variant === 'secondary' ? 'secondary' : ''}">
      <span class="number">${t.number}</span>
      <h3>${t.title}</h3>
      <p>${t.copy}</p>
      <a class="text-link" href="${t.href}" target="_blank" rel="noopener noreferrer">${t.cta} <span aria-hidden="true">↗</span></a>
    </article>
  `).join('');
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('visible'));
}
