class SerVivo {
    constructor(nombre) {
        this.nombre = nombre;
    }

    caminar() {
        console.log(`Ahora esta caminando: ${this.nombre}`);
    }
}

class Persona extends SerVivo {}

const persona = new Persona('Juanito');
persona.caminar()