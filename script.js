document.getElementById('waitingListForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        'entry.1286292080': formData.get('first_name'),
        'entry.395746436': formData.get('last_name'),
        'entry.1070257396': formData.get('email')
    };

    const queryString = new URLSearchParams(data).toString();
    const url = `https://docs.google.com/forms/d/e/1FAIpQLScdIK1xG6LbBqtOWxCJyNE1-kg_vS9gkMuTw8Fv8hcsdvMrUQ/formResponse?${queryString}`;

    fetch(url, {
        method: 'POST',
        mode: 'no-cors'
    }).then(() => {
        alert('Thank you for your submission!');
        this.reset();
    }).catch(err => console.error('Error:', err));
});
