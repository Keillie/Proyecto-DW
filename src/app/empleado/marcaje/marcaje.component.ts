import { Component, OnInit, ɵɵstylePropInterpolate3 } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servicio/empleado.service';
import { Empleado } from 'src/app/modelo/empleado';


@Component({
  selector: 'app-marcaje',
  templateUrl: './marcaje.component.html',
  styleUrls: ['./marcaje.component.sass'],
})


export class MarcajeComponent implements OnInit {
  empleado : Empleado[] = [];
  constructor(
    public postService: EmpleadoService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Empleado[])=>{
      this.empleado = data;
      
    })
  }



  element: boolean = true;


}
