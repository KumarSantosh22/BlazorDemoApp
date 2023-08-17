function showAlert() {
    alert("JS interop demo");
}

function toggleBackground(isWhilte) {
    let testInterop = document.getElementById("test-interop");
    if (isWhilte) {
        testInterop.classList.remove('bg-secondary');
        testInterop.classList.add('bg-success');
    }
    else {
        testInterop.classList.remove('bg-success');
        testInterop.classList.add('bg-secondary');
    }
}