// Alert Button Functionality
document.getElementById('alertButton').addEventListener('click', () => {
    alert('Button clicked! This is an example of JavaScript in action.');
});

// Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents actual form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
