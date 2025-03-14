
const datos =[]; 

function informacion(){ 
 
const nombre = document.getElementById("nombre");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const fecha = document.getElementById("fecha");

    if (nombre && origen && destino && fecha){
        const solicitud = {
        nombre: nombre.value,
        origen: origen.value,
        destino: destino.value,
        fecha: fecha.value
    }
    datos.push(solicitud);

    console.log(datos);
    document.getElementById("formulario").reset();}
    else {console.log("no se introdujeron todos los datos")}
}

function filtrar(){
    const destinosFiltrados= ["canarias","mayorca","galicia"];
    const resultadosFiltrados=datos.filter(solicitud =>{
        const destino = solicitud.destino.toLowerCase()
    return destinosFiltrados.includes(destino)}
    )
    console.log(resultadosFiltrados)

}

const listaResultados= document.getElementById("lista-resulltados)");
listaResultados.innerHTML="";