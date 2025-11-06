const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if(!form.checkValidity()){
        e.preventDefault();
    }

    form.classList.add("was-validated");
})

const year = document.querySelector("#year");

let d = new Date();
year.textContent = `${d.getFullYear()}`;