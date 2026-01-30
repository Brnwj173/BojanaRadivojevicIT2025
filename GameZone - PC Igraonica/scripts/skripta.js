/*jshint esversion: 6 */
/*globals document */

var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    alert(`Hvala ${name}! Vaša poruka je uspešno poslata.\n\nKontaktiraćemo vas uskoro na: ${email}`);
    
    contactForm.reset();
});


