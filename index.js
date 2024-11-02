function converted() {
    const amount = document.querySelector('.amount-input').value;
    if (amount === "") {
        alert("Please Enter A value");
        return; 
    }
    const rate = 84; 
    const convertedAmount = amount * rate;
    document.querySelector('.hello-input').value = convertedAmount.toFixed(2);
}

// Event listener should be outside the converted function
const amountInput = document.querySelector('.amount-input');
if (amountInput) {
    amountInput.addEventListener('keypress', function(event) {
        console.log("Key pressed:", event.key);
        if (event.key === 'Enter') {
            converted();
        }
    });
}