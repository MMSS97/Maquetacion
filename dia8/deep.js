$(document).ready(function() {
    // Datos de ejemplo
    const professionals = [
        new Professional("Christopher Nolan", 52, 75, 185, false, "British", 0, "Director", "https://example.com/nolan.jpg"),
        new Professional("Christian Bale", 48, 80, 183, false, "British", 1, "Actor", "https://example.com/bale.jpg"),
        new Professional("Heath Ledger", null, 85, 185, true, "Australian", 1, "Actor", "https://example.com/ledger.jpg"),
        new Professional("Jonathan Nolan", 46, 78, 180, false, "British-American", 0, "Writer", "https://example.com/jnolan.jpg")
    ];

    const movies = [
        new Movie(
            "The Dark Knight",
            2008,
            [professionals[1]], // Christian Bale
            "American",
            professionals[0], // Christopher Nolan
            professionals[3], // Jonathan Nolan
            "English",
            "Warner Bros.",
            false,
            "Bruce Wayne / Batman",
            "Emma Thomas",
            "Warner Bros. Pictures",
            "Action/Crime/Drama",
            "https://example.com/darkknight.jpg"
        ),
        new Movie(
            "Inception",
            2010,
            [professionals[1]], // Christian Bale
            "American",
            professionals[0], // Christopher Nolan
            professionals[3], // Jonathan Nolan
            "English",
            "Warner Bros.",
            false,
            "Dom Cobb",
            "Emma Thomas",
            "Warner Bros. Pictures",
            "Sci-Fi/Thriller",
            "https://example.com/inception.jpg"
        )
    ];

    // Navegación entre secciones
    $('[data-section]').click(function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section');
        
        // Actualizar navegación activa
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        // Mostrar sección correspondiente
        $('.section').removeClass('active');
        $(`#${sectionId}`).addClass('active');
        
        // Cargar datos si es necesario
        if (sectionId === 'movies') {
            renderMovies();
        } else if (sectionId === 'professionals') {
            renderProfessionals();
        }
    });

    // Renderizar películas
    function renderMovies() {
        const $container = $('#movies-container');
        $container.empty();
        
        if (movies.length === 0) {
            $container.html('<p>No hay películas disponibles.</p>');
            return;
        }
        
        movies.forEach(movie => {
            
            $container.append(`
                <div class="col-md-6">
                    <div class="movie-card card h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${movie.photo || 'https://via.placeholder.com/300x450?text=No+poster'}" 
                                     class="movie-poster img-fluid rounded-start" alt="${movie.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.title} (${movie.releaseYear})</h5>
                                    <p class="card-text">
                                        <strong>Género:</strong> ${movie.genre}<br>
                                        <strong>Director:</strong> ${movie.director.name}<br>
                                        <strong>Actores:</strong> ${movie.actor}<br>
                                        <strong>Personaje principal:</strong> ${movie.mainCharacterName}<br>
                                        <strong>Idioma:</strong> ${movie.language}<br>
                                        <strong>MCU:</strong> ${movie.isMCU ? 'Sí' : 'No'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Renderizar profesionales
    function renderProfessionals() {
        const $container = $('#professionals-container');
        $container.empty();
        
        if (professionals.length === 0) {
            $container.html('<p>No hay profesionales disponibles.</p>');
            return;
        }
        
        professionals.forEach(professional => {
            $container.append(`
                <div class="col-md-4">
                    <div class="professional-card card h-100">
                        <img src="${professional.photo || 'https://via.placeholder.com/300x300?text=No+photo'}" 
                             class="professional-photo card-img-top" alt="${professional.name}">
                        <div class="card-body">
                            <h5 class="card-title">${professional.name}</h5>
                            <p class="card-text">
                                <strong>Profesión:</strong> ${professional.profession}<br>
                                <strong>Edad:</strong> ${professional.age || 'N/A'}<br>
                                <strong>Nacionalidad:</strong> ${professional.nationality}<br>
                                <strong>Oscars:</strong> ${professional.oscarsNumber}<br>
                                <strong>Retirado:</strong> ${professional.isRetired ? 'Sí' : 'No'}
                            </p>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Formulario para añadir películas
    $('#movieForm').submit(function(e) {
        e.preventDefault();
        
        const newMovie = new Movie(
            $('#title').val(),
            parseInt($('#releaseYear').val()),
            [], // Actores vacíos (no se incluyen en el formulario)
            $('#nationality').val(),
            null, // Director no incluido
            null, // Guionista no incluido
            $('#language').val(),
            $('#platform').val(),
            $('#isMCU').val() === 'true',
            $('#mainCharacterName').val(),
            $('#producer').val(),
            $('#distributor').val(),
            $('#genre').val(),
            $('#photo').val() || undefined
        );
        
        movies.push(newMovie);
        renderMovies();
        
        // Limpiar formulario
        this.reset();
        alert('Película añadida correctamente');
    });
});