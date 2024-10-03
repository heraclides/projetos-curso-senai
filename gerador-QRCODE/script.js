const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Generador QR Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) {
        alert('O campo esta Vázio, digite uma URL')
        return
    }; 

    const urlPattern = new RegExp('^(https?:\\/\\/)?' + 
        '((([a-z0-9]\\w*)\\.)+[a-z]{2,}|' + 
        'localhost|' + 
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + 
        '\\[?[a-f0-9]*:[a-f0-9:%.]+\\]?)' + 
        '(\\:\\d+)?(\\/[-a-z0-9%_.~+]*)*' + 
        '(\\?[;&a-z0-9%_.~+=-]*)?' + 
        '(\\#[-a-z0-9_]*)?$','i'); 

    if (!urlPattern.test(qrCodeInputValue)) {
        alert('Digite uma URL válida');
        return;
    }

    qrCodeBtn.innerText = "Gerando Código...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; 

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Códigos criados!";
    });
}

// Eventos
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeBtn.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// limpa QR Code area
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerador de QR Code...";
    }
});