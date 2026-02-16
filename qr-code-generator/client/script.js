document.getElementById('qr-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('qr-id').value;
    const price = document.getElementById('qr-price').value;

    fetch('http://localhost:3000/generate-qr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: { id, price }
        })
    })
    .then(response => response.blob())
    .then(blob => {
        const reader = new FileReader();

        reader.onloadend = function () {
            const base64data = reader.result;

            // Save Base64 image
            localStorage.setItem("qrImage", base64data);

            window.location.href = "result.html";
        };

        reader.readAsDataURL(blob);
    })
    .catch(error => console.error('Error:', error));
});
