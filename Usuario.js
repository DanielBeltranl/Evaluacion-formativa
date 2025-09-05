 export class Usuario {
     constructor(nombre, apellido, telefono, email, fechaNacimiento, direccion, ciudad) {
         this._nombre = nombre;
         this._apellido = apellido;
         this._telefono = telefono;
         this._fechaNacimiento = fechaNacimiento;
         this._email = email;
         this._direccion = direccion;
         this._ciudad = ciudad;
     }


     get nombre() {
         return this._nombre;
     }

     set nombre(value) {
         this._nombre = value;
     }

     get apellido() {
         return this._apellido;
     }

     set apellido(value) {
         this._apellido = value;
     }

     get telefono() {
         return this._telefono;
     }

     set telefono(value) {
         this._telefono = value;
     }

     get email() {
         return this._email;
     }

     set email(value) {
         this._email = value;
     }

     get fechaNacimiento() {
         return this._fechaNacimiento;
     }

     set fechaNacimiento(value) {
         this._fechaNacimiento = value;
     }

     get direccion() {
         return this._direccion;
     }

     set direccion(value) {
         this._direccion = value;
     }

     get ciudad() {
         return this._ciudad;
     }

     set ciudad(value) {
         this._ciudad = value;
     }
 }