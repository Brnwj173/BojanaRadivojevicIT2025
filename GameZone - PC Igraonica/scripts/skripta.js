/*jshint esversion: 6 */
/*globals document */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    alert(`Hvala ${name}! Vaša poruka je uspešno poslata.\n\nKontaktiraćemo vas uskoro na: ${email}`);
    
    contactForm.reset();
});



