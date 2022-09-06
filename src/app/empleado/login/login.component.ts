import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servicio/empleado.service';
import { Empleado } from 'src/app/modelo/empleado';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {

  empleado : Empleado[] = [];
  constructor(
    public postService: EmpleadoService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.postService.getAll().subscribe((data: Empleado[])=>{
        this.empleado = data;
     
      });
      console.log(this.empleado);
    }

    
  element: boolean= true;
  ingreso(correo: string, pass: string) {
    console.log(this.empleado.length);
    this.postService.encontrar(correo,pass).subscribe(res=>{
      window.alert("ERES REGISTRADO");
      this.router.navigateByUrl('marcaje');
    })
  }
  /*public ingreso(pass: string, correo: string) {
    console.log(this.empleado.length);

    for (let i = 0; i < this.empleado.length; i++) {
      
      if (pass == this.empleado[i].apellidos && correo == this.empleado[i].nombres) {
        window.alert("ERES REGISTRADO");
        this.router.navigateByUrl('marcaje');
        
      }   
    }
    // this.element=false
  }*/
}

function foreach(arg0:Empleado){
  throw new Error('Function not implemented.');
}
