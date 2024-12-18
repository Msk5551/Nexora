document.querySelector("form").addEventListener("submit", function(e) {
    const formElements = e.target.elements;
    let valid = true;

    for (let element of formElements) {
        if (element.type !== "submit" && !element.value) {
            valid = false;
            alert("Veuillez remplir tous les champs !");
            break;
        }
    }

    if (!valid) {
        e.preventDefault();
    }
});
