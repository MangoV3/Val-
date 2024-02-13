document.getElementById('valentineForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get input values
    const recipientName = document.getElementById('recipientName').value;
    const message = document.getElementById('message').value;

    // Send message (you can customize this part, e.g., sending an email)
    alert(`Message sent to ${recipientName}: ${message}`);
    
    // Reset form fields
    document.getElementById('recipientName').value = '';
    document.getElementById('message').value = '';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    // Display confetti animation
    document.getElementById('confetti').innerHTML = '<img src="confetti.gif">';
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Display rain animation
    document.getElementById('rain').innerHTML = '<img src="rain.gif">';
});