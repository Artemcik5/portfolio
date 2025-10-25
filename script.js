// Scroll animations
// Skills tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        // Remove active from all buttons
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show the target tab content and hide the others
        tabContents.forEach(tc => {
            if(tc.id === target) {
                tc.style.display = 'flex'; // flex for layout
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

// Language switcher
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

// Initialize default language
switchLanguage('en');

enBtn.addEventListener('click', () => switchLanguage('en'));
czBtn.addEventListener('click', () => switchLanguage('cz'));
