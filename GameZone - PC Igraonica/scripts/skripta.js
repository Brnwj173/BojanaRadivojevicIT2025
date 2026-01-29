// Obrada kontakt forme
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simulacija slanja forme
    alert(`Hvala ${name}! Vaša poruka je uspešno poslata.\n\nKontaktiraćemo vas uskoro na: ${email}`);
    
    // Resetuj formu
    contactForm.reset();
});
