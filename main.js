


// constructor
class Alumno {
    constructor (nombre, edad, notaPrimerPrueba, notaSegundaPrueba) {
        this.nombre = nombre,
        this.edad = edad,
        this.notaPrimerPrueba = notaPrimerPrueba,
        this.notaSegundaPrueba = notaSegundaPrueba,
        this.promedio = [notaPrimerPrueba + notaSegundaPrueba] /2
    }
}

// defino array

const arrayAlumnos = [];

// captar formulario

const nombre = document.getElementById("fNombre");
const edad = document.getElementById("fEdad");
const notaPrimerPrueba = document.getElementById("fPrimerNota");
const notaSegundaPrueba = document.getElementById("fSegundaNota");

const formulario = document.getElementById("form");


// función guardar en local storage

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


formulario.addEventListener("submit", (e) => {    
    e.preventDefault();
    Swal.fire({
    title: 'Desea guardar el alumno?',
    text: "Cancele para comenzar de nuevo",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, guardar!'
  }).then((result) => {
    if (result) {
        let nuevoAlumno = new Alumno (nombre.value, edad.value, parseInt(notaPrimerPrueba.value), parseInt(notaSegundaPrueba.value), promedio = [notaPrimerPrueba.value + notaSegundaPrueba.value] /2)
        arrayAlumnos.push(nuevoAlumno);
        
        console.log(arrayAlumnos);
    
        guardarLocal ("ListaAlumnos", JSON.stringify(arrayAlumnos))
    }
  })
     
} );





//Experimento Storage

 let checkStorage = JSON.parse(localStorage.getItem("ListaAlumnos")); 

 if (checkStorage) {
     let recuperarAlumnos = JSON.parse(localStorage.getItem("ListaAlumnos"))
     recuperarAlumnos.forEach(el => {
         let nodo = document.createElement('div');
     nodo.innerHTML = `
     <h4>Datos de alumno</h4>
     <p>${el.nombre}</p>
     <p>Edad ${el.edad} años</p>
     <p>Nota primer prueba ${el.notaPrimerPrueba}</p>
     <p>Nota segunda prueba ${el.notaSegundaPrueba}</p>
     <p>Su promedio fue de ${el.promedio}</p>`
     document.getElementById('alumnos').appendChild(nodo)
        
     });
    
    
 } else { 
    
 }





const mostrarAlumnos = document.getElementById("btn-mostrarAlumnos");

mostrarAlumnos.addEventListener ("click", function(){
    document.getElementById('alumnos').innerHTML = '';
    let recuperarAlumnos = JSON.parse(localStorage.getItem("ListaAlumnos"))
    recuperarAlumnos.forEach(el => {
        let nodo = document.createElement('div');
    nodo.innerHTML = `
    <h4>Datos de alumno</h4>
    <p>${el.nombre}</p>
    <p>Edad ${el.edad} años</p>
    <p>Nota primer prueba ${el.notaPrimerPrueba}</p>
    <p>Nota segunda prueba ${el.notaSegundaPrueba}</p>
    <p>Su promedio fue de ${el.promedio}</p>`
    document.getElementById('alumnos').appendChild(nodo)
        
    });

}); 


// Vaciar Local Storage

const clearStorage = document.getElementById("btn-clearStorage");

clearStorage.addEventListener ("click", function(){
    localStorage.clear();
});


//Lista para fetch
const listado = document.getElementById("listado");
//fetch

fetch("/data.json")
    .then((res) => res.json())
    .then((data) =>{
        data.forEach(alumno => {
            const li = document.createElement("li");
            li.innerHTML = `
                            <h5>${alumno.nombre}</h5>
                            
                            `
        listado.append(li)
        })
    });
    











































// guardarAlumnos.addEventListener("click", guardarsession("Lista Alumnos", JSON.stringify(arrayAlumnos)));

// mostrar html


/*arrayAlumnos.forEach(el => {
    let nodo = document.createElement('div');
    nodo.innerHTML = `
    <h4>Datos de alumno</h4>
    <p>${el.nombre}</p>
    <p>Edad ${el.edad} años</p>
    <p>Nota primer prueba ${el.notaPrimerPrueba}</p>
    <p>Nota segunda prueba ${el.notaSegundaPrueba}</p>
    <p>Su promedio fue de ${el.promedio}</p>`
    document.getElementById('alumnos').appendChild(nodo);
})*/




// función vieja

/*const guardarAlumno = () => {

    let nombre = prompt ("Ingrese el nombre del Alumno");
    let edad = parseInt (prompt("Ingrese la edad del alumno"));
    let notaPrimerPrueba = parseInt (prompt("Ingrese la primera nota del alumno"));
    let notaSegundaPrueba = parseInt (prompt("Ingrese la segunda nota del alumno"));
    let promedio = [notaPrimerPrueba + notaSegundaPrueba] /2;

    let nuevoAlumno = new Alumno (nombre, edad, notaPrimerPrueba, notaSegundaPrueba, promedio)
    arrayAlumnos.push(nuevoAlumno);
    otroAlumno = confirm ("¿Querés agregar otro alumno?");
    
 
}*/