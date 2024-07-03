import { Component } from '@angular/core';
import { Atenciones } from '../model/atenciones';
import { Mascotas } from '../model/mascotas';
import { TipoAtencion } from '../model/tipo-atencion';
import { MascotaServiceService } from '../service/mascota-service.service';
import { TipoAtencionServiceService } from '../service/tipo-atencion-service.service';
import { Router } from '@angular/router';
import { AtencionServiceService } from '../service/atencion-service.service';

@Component({
  selector: 'app-registro-solis',
  templateUrl: './registro-solis.component.html',
  styleUrl: './registro-solis.component.css'
})
export class RegistroSolisComponent {

  mascota : Mascotas[]= [];
  tipoAtencion : TipoAtencion []=[];


  mensajeExitoRegistro: string = '';

  constructor(private mascotaService: MascotaServiceService,
    private tipoAtencionService:TipoAtencionServiceService,
    private atencionService: AtencionServiceService,
    private router: Router) {}

    ngOnInit(): void {
      this.mascotaService.listar().subscribe(data => {
        this.mascota = data;
      });

      this.tipoAtencionService.listar().subscribe(data => {
      this.tipoAtencion = data;
      });
    }

  nuevaAtencion : Atenciones = {
   "codAtencion": 0,
    "codMascota": 0,
    "idtipoAtencion": 0,
    "fecha": '',
    "hora": '',
    "estado": 1,
    "objMascota": {
        codMascota: 1,
        nomMascota: 'nuevo',
        nomDueno: 'nuevo',
        peso: 1,
        idtipoMascota: 1,
        objTipoMascota: {
            idtipoMascotas: 1,
            descripcion: 'nuevo'
        }
    },
    "objTipoAtencion": {
      idtipoAtencion: 1,
        descripcion: 'nuevo'
    }
  };

  registrarAtencion() {
    this.atencionService.registrar(this.nuevaAtencion).subscribe(
      response => {
        this.mensajeExitoRegistro = 'Nueva Atención registrada con éxito';
        console.log('Nueva Atencion registrada con éxito:', response);
        // limpia el formulario 
        this.nuevaAtencion = {
          "codAtencion": 0, "codMascota": 0,
          "idtipoAtencion": 0, "fecha": '',
          "hora": '', "estado": 1,
          "objMascota": {
              codMascota: 0,
              nomMascota: '',
              nomDueno: '',
              peso: 0,
              idtipoMascota: 0,
              objTipoMascota: {
                  idtipoMascotas: 0,
                  descripcion: ''
              }
          },
          "objTipoAtencion": {
            idtipoAtencion: 0,
              descripcion: ''
          }
        };
        this.router.navigate(['/listado']);
        
      },
      error => {
       console.error('Error al registrar el producto:', error);
       this.mensajeExitoRegistro = 'Error al registrar la atención';
      }
    )
  };  
}
