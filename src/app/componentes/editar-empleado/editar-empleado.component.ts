import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  elID:any;
  urlTree:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private router:Router
    //private crudService:CrudService
  ){
    this.elID = this.activeRoute.snapshot.paramMap.get('id');

    console.log(this.elID);
    this.crudService.ObtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
      }
    );
  }

  ngOnInit(): void {
  }

}
