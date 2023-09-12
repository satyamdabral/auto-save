function saveText() {
    const text = document.getElementById('textarea').value;
    localStorage.setItem('savedText', text);
}

function clearText() {
    document.getElementById('textarea').value = '';
    localStorage.removeItem('savedText');
}

window.onload = function() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('textarea').value = savedText;
    }
};