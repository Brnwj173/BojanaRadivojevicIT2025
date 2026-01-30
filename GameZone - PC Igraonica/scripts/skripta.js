const contactForm=document.getElementById("contactForm");contactForm.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("name").value,a=document.getElementById("email").value;document.getElementById("phone").value,document.getElementById("message").value,alert(`Hvala ${t}! Vaša poruka je uspešno poslata.

Kontaktiraćemo vas uskoro na: ${a}`),contactForm.reset()});
