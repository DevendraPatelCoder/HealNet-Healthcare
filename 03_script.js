// Mobile navigation toggle (hamburger menu)
// Shows/hides the nav links panel on tablet & phone widths.

const navToggle = document.getElementById('nav-toggle');
const centerNav = document.getElementById('center-nav');

navToggle.addEventListener('click', () => {
    const isOpen = centerNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'   // show close (X) icon when menu is open
        : '<i class="fa-solid fa-bars"></i>';   // show hamburger icon when menu is closed
});

// Auto-close the menu whenever a nav link is tapped
centerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        centerNav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// FAQ accordion (only present on faq.html — safely does nothing elsewhere)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // close every other item first, so only one answer is open at a time
        faqItems.forEach(other => other.classList.remove('open'));

        if (!isOpen) {
            item.classList.add('open');
        }
    });
});
