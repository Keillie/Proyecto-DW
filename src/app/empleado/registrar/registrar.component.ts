import { Component, OnInit } from '@angular/core';


interface Registrar {
  name: String,
  email: String,
  password: String,
  password_confirmation: String

}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  constructor() {
    element: true;
   }

  ngOnInit(): void {
   
  }

  


  public registro(nombre: string ,correo: string, pass: string, pass2: string) {
    if (pass == pass2 && correo != "" && nombre!="" ) {
     window.alert("TOTALMENTE REGISTRADO")
     localStorage.setItem("nombre",  nombre);
     localStorage.setItem("correo",  correo);
     localStorage.setItem("pass",  pass);
     localStorage.setItem("pass2",  pass2);
   } else {
     window.alert("NO TE PUEDES REGISTRAS VUELVE A VERIFICAR TUS DATOS")
   }
 }

}
