document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Αποτρέπει την προεπιλεγμένη συμπεριφορά του submit

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert(`Καλημέρα ${firstName}, είσαι έτοιμη να φάς πούτσο;`);
});
