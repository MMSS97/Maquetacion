 class Professional {
    constructor(name, age, weight, heaight, isRetired, nacionality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = heaight;
        this.isRestired = isRetired;
        this.nacionality = nacionality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    toString() {
        return `Profesional: ${this.name}
        Edad: ${this.age} años
        Peso: ${this.weight} kg
        Altura: ${this.height} cm
        Está retirado?: ${this.isRestired ? 'Si' : 'No'}
        Nacionalidad: ${this.nacionality}
        Oscars: ${this.oscarsNumber}
        Profesion: ${this.profession}
        Foto: ${this.photo || 'no hay imagen disponible'}`
    }}
;
;
 class Movie {
    constructor (title, releaseYear, actor, nationality, director, writter, language, plataforma, isMCU, mainCharecter, producer, distributor, genre, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actor = actor;
        this.writter = writter;
        this.director = director;
        this.mainCharacterName = mainCharecter;
        this.producer = producer;
        this.distributor = distributor;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.language = language;
        this.photo = photo;
    }
    toString() {
        return `Titulo: ${this.title} '(${this.releaseYear})'
        Nacionalidad: ${this.nationality}
        Genero: ${this.genre}
        Actor: ${this.actor}
        Guionista: ${this.writter}
        Director: ${this.director}
        Protagonista: ${this.mainCharacterName}
        Productor: ${this.producer}
        Distribuidor: ${this.distributor}
        Plataforma: ${this.plataforma}
        Es del mundo marvel?: ${this.isMCU ? 'Si' : 'No'}
        Idioma: ${this.language}
        Foto: ${this.photo|| 'No hay portada disponible'}
        `
    }
}

var keanuReeves = new Professional ("Keanu Reeves", 55, 82,182, false, "EEUU0", 2, "actor","https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/1200px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg")
var richardGare = new Professional("Richard Gare", 67, 75, 188, false, "EEUU", 5, "actor", "https://upload.wikimedia.org/wikipedia/commons/9/99/Richard_Gere-69101.jpg");
var lanaWachowski = new Professional ("Lana Wachoski",55,78,178,true,"eeuu",8,"director", "https://ntvb.tmsimg.com/assets/assets/150673_v9_ba.jpg")
var orladoBloom= new Professional ("Orlado Bloom",52,86,186,false,"EEUU",2,"actor","https://upload.wikimedia.org/wikipedia/commons/d/da/Orlando_Bloom_at_the_2024_Toronto_International_Film_Festival_%28cropped2%29.jpg")
var johnnyDepp = new Professional ("Johnny Depp", 50, 78, 185, false, "EEUU", 5, "actor", "https://m.media-amazon.com/images/M/MV5BZjA3NzZiZDktZjc2My00MzY2LThhOWMtZGFjYzg4ZDI2ZWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg")
var willSmith = new Professional ("Will Smith", 56, 95, 189, false, "eeuu",5,"actor","https://upload.wikimedia.org/wikipedia/commons/6/67/Will_Smith_by_Gage_Skidmore_2.jpg")
var penelopeCruz = new Professional ("Penelope Cruz", 46, 65, 170, false,"España",2,"actriz","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Goyas_2024_-_Pen%C3%A9lope_Cruz-2_%28cropped%29.jpg/1200px-Goyas_2024_-_Pen%C3%A9lope_Cruz-2_%28cropped%29.jpg")
var matrix = new Movie("matrix",2000,keanuReeves,"EEUU",lanaWachowski,lanaWachowski,"español","netflix",false,"Neo","filmax","WB","Acción","https://pics.filmaffinity.com/Matrix-177462289-large.jpg")


let yoRobot= new Movie ("Yo Robot",2003,willSmith,"EEUU",lanaWachowski,penelopeCruz,"español","Aamzon",false,"artur","filmax","oregon films","accion","https://pics.filmaffinity.com/Yo_robot-536641702-large.jpg")
let misPelis = []
misPelis.push(matrix,yoRobot)
let profesionales =[ 
    new Professional ("Keanu Reeves", 55, 82,182, false, "EEUU0", 2, "actor","https://ca.wikipedia.org/wiki/Fitxer:Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_(46806576944)_(cropped).jpg"),
    new Professional ("Richard Gare", 67, 75, 188, false, "EEUU", 5, "actor", "https://upload.wikimedia.org/wikipedia/commons/9/99/Richard_Gere-69101.jpg"),
    new Professional ("Lana Wachoski",55,78,178,true,"eeuu",8,"director", "https://ntvb.tmsimg.com/assets/assets/150673_v9_ba.jpg"),
    new Professional ("Orlado Bloom",52,86,186,false,"EEUU",2,"actor","https://upload.wikimedia.org/wikipedia/commons/d/da/Orlando_Bloom_at_the_2024_Toronto_International_Film_Festival_%28cropped2%29.jpg"),
    new Professional ("Johnny Depp", 50, 78, 185, false, "EEUU", 5, "actor", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRiqIoLoUrueAz1aMqGC70cZ3YcTKO54b8-jARSwCxEDymdV48HY9ca0MTSqlaV20mPbzx-G3MFwpVgNy3JhDR3Q"),
    new Professional ("Will Smith", 56, 95, 189, false, "eeuu",5,"actor","https://upload.wikimedia.org/wikipedia/commons/6/67/Will_Smith_by_Gage_Skidmore_2.jpg"),
    new Professional ("Penelope Cruz", 46, 65, 170, false,"España",2,"actriz","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Goyas_2024_-_Pen%C3%A9lope_Cruz-2_%28cropped%29.jpg/1200px-Goyas_2024_-_Pen%C3%A9lope_Cruz-2_%28cropped%29.jpg")
    ];
    ;

$(document).ready(function () {
    
    
                $.each(misPelis, function(index, peli) {
                $("#movie").append(`
                     <div class="col-md-6 m-5">
                    <div class="movie-card card h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${peli.photo || 'no hay una imagen disponible'}" 
                                     class="movie-poster img-fluid rounded-start" alt="${peli.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${peli.title} (${peli.releaseYear})</h5>
                                    <p class="card-text">
                                        <strong>Género:</strong> ${peli.genre}<br>
                                        <strong>Director:</strong> ${peli.director.name}<br>
                                        <strong>Actores:</strong> ${peli.actor.name}<br>
                                        <strong>Personaje principal:</strong> ${peli.mainCharacterName}<br>
                                        <strong>Idioma:</strong> ${peli.language}<br>
                                        <strong>MCU:</strong> ${peli.isMCU ? 'Sí' : 'No'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`)}
                )
                $.each(profesionales, function (index, professional){
        $("#profesionales").append(`
            <div class="col-md-4 m-5 d-inline-flex flex-row justify-content-between flex-wrap">
                    <div class="professional-card card h-100">
                        <img src="${professional.photo || 'https://via.placeholder.com/300x300?text=No+photo'}"
                             class="p-3 professional-photo card-img-top" alt="${professional.name}">
                        <div class="card-body">
                            <h5 class="card-title">${professional.name}</h5>
                            <p class="card-text">
                                <strong>Profesión:</strong> ${professional.profession}<br>
                                <strong>Edad:</strong> ${professional.age || 'N/A'}<br>
                                <strong>Nacionalidad:</strong> ${professional.nacionality}<br>
                                <strong>Oscars:</strong> ${professional.oscarsNumber}<br>
                                <strong>Retirado:</strong> ${professional.isRetired ? 'Sí' : 'No'}
                            </p>
                        </div>
                    </div>
                </div>
            `)
    })
   
    
            })
          function renderizarPelis() {
            const listaPelis = document.getElementById("movie");
            listaPelis.innerHTML="";
            misPelis.forEach(function (peli, index) {
                const peliculaElement = document.createElement("div");
                peliculaElement.className = "pelicula";
                peliculaElement.innerHTML = `
                <div class="col-md-6 m-5">
                    <div class="movie-card card h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${peli.photo || 'no hay una imagen disponible'}" 
                                     class="movie-poster img-fluid rounded-start" alt="${peli.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${peli.title} (${peli.releaseYear})</h5>
                                    <p class="card-text">
                                        <strong>Género:</strong> ${peli.genre}<br>
                                        <strong>Personaje principal:</strong> ${peli.mainCharacterName}<br>
                                        <strong>Idioma:</strong> ${peli.language}<br>
                                        <strong>MCU:</strong> ${peli.isMCU ? 'Sí' : 'No'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                listaPelis.appendChild(peliculaElement)
            })
            
            
          }
            document.getElementById("form").addEventListener("submit", function(event){
                event.preventDefault();
                let title = document.getElementById("title").value
                let release =parseInt(document.getElementById("releaseYear").value)
                let nationality= document.getElementById("nationality").value
                let language = document.getElementById("language").value
                let platform = document.getElementById("platform").value
                let isMCU = document.getElementById("isMCU").value === "true"
                let mainCharacterName = document.getElementById("mainCharacterName").value
                let producer = document.getElementById("producer").value
                let distributor =document.getElementById("distributor").value
                let genre = document.getElementById("genre").value
                let photo = document.getElementById("photo").value

                let nuevaPeli = new Movie (title,release, [],nationality,null,null,language,platform,isMCU,mainCharacterName,producer,distributor,genre,photo)
                misPelis.push(nuevaPeli)
                this.reset()
                renderizarPelis()
                subir()
            })
            function subir(){
                document.getElementById("subir").addEventListener("click", () => {
                    
                    verPelis.scrollIntoView({behavior:"smooth"})
                
                })}
            
            




          
