document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch("https://odoo.plastigesa.com/send", {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((response) => response.text())
        .then((data) => {
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Su mensaje ha sido enviado con éxito!",
            }).then(() => {
                document.getElementById("contactForm").reset();
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al enviar su mensaje. Inténtelo de nuevo.",
            });
            console.error("Error al enviar el mensaje:", error);
        });
});