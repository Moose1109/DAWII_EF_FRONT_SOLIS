import { Component } from '@angular/core';
import { Atenciones } from '../model/atenciones';
import { ActivatedRoute,Router } from '@angular/router';
import { AtencionServiceService } from '../service/atencion-service.service';



@Component({
  selector: 'app-consulta-solis',
  templateUrl: './consulta-solis.component.html',
  styleUrl: './consulta-solis.component.css'
})
export class ConsultaSolisComponent {

    atencion: Atenciones[] = [];
    mensajeExito: string = '';
    fecha: string = '';

    atencion2 : Atenciones = {
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
    constructor(private atencionService: AtencionServiceService,
      private router: Router,private route:ActivatedRoute
    ){}

    ngOnInit():void{
      this.atencionService.listar().subscribe(data => {
          this.atencion = data;
      });
    }

    consultarPorFecha(): void {
      if (!this.fecha.trim()) {
        console.error('Debe ingresar una fecha válida');
        return;
      }
    
      this.atencionService.buscar(this.fecha).subscribe({
        next: (data: Atenciones[]) => {
          this.atencion = data;
          
        },
        error: (error) => {
          console.error('Error al buscar atenciones por fecha:', error);
          this.mensajeExito = 'Error al buscar atenciones por fecha';
        }
      });
    }

    eliminarAtencion(codAtencion: number): void {
      this.atencionService.eliminar(codAtencion)
        .subscribe(
          () => {
            this.mensajeExito = 'Atención eliminada con éxito';
            console.log('Atención eliminada con éxito');
            this.ngOnInit();
            this.router.navigate(['/listado']);
          },
          error => { 
            console.error('Error al eliminar la atención:', error); 
            this.mensajeExito = 'Error al eliminar la atención';
          }
        );
    }

   
}
