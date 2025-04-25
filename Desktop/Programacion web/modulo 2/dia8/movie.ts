class Professional {
    public name: string
    public age: number 
    public weight: number 
    public height: number 
    public isRestired: boolean
    public nacionality: string
    public oscarsNumber: number
    public profession: string
    public photo: string
    constructor(
        name: string,
        age: number, 
        weight: number, 
        heaight: number, 
        isRetired: boolean, 
        nacionality: string, 
        oscarsNumber: number, 
        profession: string,
        photo: string
    ){
        this.name=name
        this.age=age
        this.weight=weight
        this.height=heaight
        this.isRestired=isRetired
        this.nacionality=nacionality
        this.oscarsNumber=oscarsNumber
        this.profession=profession
        this.photo = photo
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
    }
};

class Movie {
    public title: string
    public releaseYear: number 
    public actor: Professional[]
    public nationality: string
    public director: Professional
    public writter: Professional
    public lenguage: string
    public plataforma: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string
    public photo: string    
    constructor(
        title:string, 
        releaseYear: number, 
        actor: Professional[],
        nationality: string, 
        director:Professional,
        writter: Professional,
        lenguage: string,
        plataforma: string,
        isMCU: boolean,
        mainCharecter: string,
        producer: string,
        distributor:string,
        genre: string,
        photo:string
        
        
    ){
        this.title= title
        this.releaseYear= releaseYear
        this.nationality = nationality
        this.genre= genre
        this.actor= actor
        this.writter= writter
        this.director= director
        this.mainCharacterName= mainCharecter
        this.producer= producer
        this.distributor= distributor
        this.plataforma= plataforma
        this.isMCU = isMCU
        this.lenguage= lenguage
        this.photo = photo
    };
    
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
        Idioma: ${this.lenguage}
        Foto: ${this.photo|| 'No hay portada disponible'}
        `
    }
}


