const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabContents.forEach(tc => {
      tc.style.display = (tc.id === target) ? 'flex' : 'none';
    });
  });
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


const enBtn = document.getElementById('en-btn');
const czBtn = document.getElementById('cz-btn');

function switchLanguage(lang) {
  
  document.querySelectorAll('[data-en],[data-cz]').forEach(el => {
    const enAttr = el.getAttribute('data-en');
    const czAttr = el.getAttribute('data-cz');

    if (lang === 'en') {
      
      if (enAttr !== null && enAttr !== '') {
        el.innerHTML = enAttr;
      } else if (czAttr !== null && czAttr !== '') {
        el.innerHTML = czAttr;
      } 
    } else {
      
      if (czAttr !== null && czAttr !== '') {
        el.innerHTML = czAttr;
      } else if (enAttr !== null && enAttr !== '') {
        el.innerHTML = enAttr;
      } 
    }
  });


  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (czBtn) czBtn.classList.toggle('active', lang === 'cz');
}

if (!enBtn || !czBtn) {
  console.warn('Language buttons missing', { enBtn, czBtn });
} else {
  enBtn.addEventListener('click', () => {
    console.log('EN clicked');
    switchLanguage('en');
  });
  czBtn.addEventListener('click', () => {
    console.log('CZ clicked');
    switchLanguage('cz');
  });
}


switchLanguage('cz');



const shapesContainer = document.querySelector('.floating-shapes');
if (!shapesContainer) {
  console.warn('No .floating-shapes container found — skipping shapes.');
} else {
  const shapeTypes = ['shape-square', 'shape-circle', 'shape-triangle'];
  const numShapes = 12;
  for (let i = 0; i < numShapes; i++) {
    const box = document.createElement('div');
    box.classList.add('floating-box');

    const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    box.classList.add(shape);

    box.style.top = Math.random() * 90 + 'vh';
    box.style.left = Math.random() * 90 + 'vw';

    box.style.animationDuration = (5 + Math.random() * 10).toFixed(2) + 's';
    box.style.pointerEvents = 'none'; 

    shapesContainer.appendChild(box);
  }
}
