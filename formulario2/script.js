const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector(`input[name=name]`).value;
    const email = document.querySelector(`input[name=email]`).value;
    const phone = document.querySelector(`input[name=phone]`).value;
    const address = document.querySelector(`input[name=address]`).value;
    const city = document.querySelector(`input[name=city]`).value;
    const date = document.querySelector(`input[name=date]`).value;

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !phone || !address || !city || !date) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    fetch('https://api.sheetmonkey.io/form/pW8VW6yrSQT1wWym9oRxbR', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, address, city, date })
    })
   
}

document.querySelector('form').addEventListener("submit", handleSubmit);