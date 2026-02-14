
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;


        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

   
        tabContents.forEach(tc => {
            if(tc.id === target) {
                tc.style.display = 'flex'; 
            } else {
                tc.style.display = 'none';
            }
        });
    });
});


const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.2});

sections.forEach(section => observer.observe(section));


const enBtn = document.getElementById('en-btn');
const czBtn = document.getElementById('cz-btn');

function switchLanguage(lang){
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.cz;
    });

    if(lang === 'en'){
        enBtn.classList.add('active');
        czBtn.classList.remove('active');
    } else {
        czBtn.classList.add('active');
        enBtn.classList.remove('active');
    }
}


switchLanguage('cz');

const shapesContainer = document.querySelector('.floating-shapes');
const shapeTypes = ['shape-square', 'shape-circle', 'shape-triangle'];
const numShapes = 12; 

for (let i = 0; i < numShapes; i++) {
  const box = document.createElement('div');
  box.classList.add('floating-box');


  const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
  box.classList.add(shape);


  box.style.top = Math.random() * 90 + 'vh'; 
  box.style.left = Math.random() * 90 + 'vw';

  const duration = (5 + Math.random() * 10).toFixed(2);
  box.style.animationDuration = `${duration}s`;

  shapesContainer.appendChild(box);
}

enBtn.addEventListener('click', () => switchLanguage('en'));
czBtn.addEventListener('click', () => switchLanguage('cz'));
