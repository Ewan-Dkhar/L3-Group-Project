const form = document.querySelector("form");
const table = document.querySelector("table > tbody");
const modalAgreeButton = document.querySelector("#agree-btn")
const modalCloseButton = document.querySelector("#close-btn")
const modal = new bootstrap.Modal(document.getElementById('terms'));

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    console.log(form.checkValidity())
    if (form.checkValidity()) {
      modal.show();
    } else {
      form.classList.add('was-validated');
    }
});

modalAgreeButton.addEventListener("click", () => {
    const name = form.floatingName.value;
    const email = form.floatingEmail.value;
    const number = form.floatingPhone.value;

    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td>
                <td>${email}</td>
                <td>${number}</td>`;
    table.appendChild(newRow);

    form.reset();
    form.classList.remove("was-validated");
})
modalCloseButton.addEventListener("click", () => {
    form.reset();
    form.classList.remove("was-validated");
})