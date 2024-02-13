document.getElementById('yesBtn').addEventListener('click', function() {
    // Display confetti animation
    document.getElementById('confetti').innerHTML = '<img src="confetti.gif">';
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Display heartbreak animation
    document.getElementById('heartbreak').innerHTML = '<img src="heartbreak.gif">';
});
