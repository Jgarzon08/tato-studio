document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studio-contact-form');
    
    const fields = {
        name: { input: document.getElementById('fullName'), group: document.getElementById('fullName').parentElement },
        email: { input: document.getElementById('emailAddress'), group: document.getElementById('emailAddress').parentElement },
        type: { input: document.getElementById('eventType'), group: document.getElementById('eventType').parentElement },
        message: { input: document.getElementById('userMessage'), group: document.getElementById('userMessage').parentElement }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Detiene el refresco automático de la página
        let isFormValid = true;

        // Validar Nombre
        if (fields.name.input.value.trim() === '') {
            fields.name.group.classList.add('invalid');
            isFormValid = false;
        } else {
            fields.name.group.classList.remove('invalid');
        }

        // Validar Email con Expresión Regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fields.email.input.value.trim())) {
            fields.email.group.classList.add('invalid');
            isFormValid = false;
        } else {
            fields.email.group.classList.remove('invalid');
        }

        // Validar Tipo de Evento (Select)
        if (fields.type.input.value === '') {
            fields.type.group.classList.add('invalid');
            isFormValid = false;
        } else {
            fields.type.group.classList.remove('invalid');
        }

        // Validar Mensaje
        if (fields.message.input.value.trim() === '') {
            fields.message.group.classList.add('invalid');
            isFormValid = false;
        } else {
            fields.message.group.classList.remove('invalid');
        }

        // Si todo está correcto, simular envío exitoso
        if (isFormValid) {
            alert('¡Gracias! Tu mensaje ha sido enviado con éxito a Tato Studio. Te responderé muy pronto.');
            form.reset(); // Limpia los campos del formulario
        }
    });

    // limpiar los errores mientras el usuario escribe de nuevo
    Object.values(fields).forEach(field => {
        field.input.addEventListener('input', () => {
            if (field.input.value.trim() !== '') {
                field.group.classList.remove('invalid');
            }
        });
    });
});