$(document).ready(function() {
    let carrito = [];

    // Añadir producto al carrito
    $('.añadir-carrito').click(function() {
        const nombre = $(this).data('nombre');
        const precio = parseFloat($(this).data('precio'));

        // Añadir al carrito
        carrito.push({nombre, precio});

        // Actualizar contador
        $('#contador-carrito').text(carrito.length);

        // Notificación
        alert(`¡${nombre} añadido al carrito!`);
    });

    // Mostrar carrito
    $('#carrito-icono').click(function() {
        $('#items-carrito').empty();
        let total = 0;

        if (carrito.length === 0) {
            $('#items-carrito').append('<p>Tu carrito está vacío</p>');
        } else {
            carrito.forEach(function( item, index) {
                $('#items-carrito').append(`
                    <div class="item-carrito">
                        <span>${item.nombre}</span>
                        <span>${item.precio}€</span>
                    </div>
                `);
                total += item.precio;
            });
        }

        $('#total-carrito').text(total);
        $('#modal-carrito').fadeIn();
    });

    // Cerrar carrito
    $('#cerrar-carrito').click(function() {
        $('#modal-carrito').fadeOut();
    });
});

