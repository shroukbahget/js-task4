
document.getElementById('input-text').addEventListener('change', function() {
    const errorMessage = document.getElementById('error');
    if (this.value.length < 6) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
});


document.getElementById('input-text').addEventListener('input', function() {
    const errorMessage = document.getElementById('error');
    if (this.value.length < 6) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
});