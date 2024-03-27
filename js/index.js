function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var madre = document.getElementById('madre').value;
    var padre = document.getElementById('padre').value;
    var trabajo = document.getElementById('trabajo').value;
    var pasatiempo = document.getElementById('pasatiempo').value;
    var proyecto = document.getElementById('proyecto').value;

    // Validar que todos los campos estén llenos
    if (nombre === '' || trabajo === '' || pasatiempo === '' || proyecto === '' || madre === '' || padre === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Imprimir respuestas en algún lugar específico del documento
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Respuestas:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Madre:</strong> ${madre}</p>
        <p><strong>padre:</strong> ${padre}</p>
        <p><strong>Trabajo:</strong> ${trabajo}</p>
        <p><strong>Pasatiempo:</strong> ${pasatiempo}</p>
        <p><strong>Proyecto:</strong> ${proyecto}</p>
    `;

    // Mostrar también la alerta
    alert('Formulario enviado correctamente.');
}


