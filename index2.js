class SerVivo {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Persona extends SerVivo {
    caminar() {
        console.log('Ahora esta caminando: ' + this.nombre);
    }
}

const persona = new Persona('Sebastián');
persona.caminar()