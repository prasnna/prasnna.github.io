import { Tracking } from './tracking.js';

document.addEventListener('DOMContentLoaded', () => {
    new Tracking();
    initNav();
    initReveal();
    initTyping();
});

/* ── Nav: add .scrolled class when page is not at top ── */
function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
}

/* ── Scroll reveal: IntersectionObserver adds .visible ── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        },
        { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    els.forEach(el => io.observe(el));

    // Fallback: if IntersectionObserver is slow or restricted,
    // show everything after 1s just in case.
    setTimeout(() => {
        els.forEach(el => el.classList.add('visible'));
    }, 1500);
}

/* ── Terminal typing animation ── */
function initTyping() {
    const target = document.getElementById('typed');
    if (!target) return;

    const phrases = [
        'whoami',
        'Senior Software Engineer',
        'java --version 11.0 && python --version',
        'aws bedrock list-agents | grep active',
        'git log --oneline -3',
    ];

    let phraseIndex = 0;
    let charIndex   = 0;
    let deleting    = false;
    let pausing     = false;

    const PAUSE_END   = 1800;
    const PAUSE_START = 400;
    const TYPE_SPEED  = 60;
    const DEL_SPEED   = 30;

    function tick() {
        const phrase = phrases[phraseIndex];

        if (pausing) return; // wait handled by setTimeout below

        if (!deleting) {
            charIndex++;
            target.textContent = phrase.slice(0, charIndex);

            if (charIndex === phrase.length) {
                pausing = true;
                setTimeout(() => {
                    pausing   = false;
                    deleting  = true;
                    loop();
                }, PAUSE_END);
                return;
            }
        } else {
            charIndex--;
            target.textContent = phrase.slice(0, charIndex);

            if (charIndex === 0) {
                deleting   = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                pausing    = true;
                setTimeout(() => {
                    pausing = false;
                    loop();
                }, PAUSE_START);
                return;
            }
        }

        loop();
    }

    function loop() {
        setTimeout(tick, deleting ? DEL_SPEED : TYPE_SPEED);
    }

    loop();
}
