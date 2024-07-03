import { Mascotas } from "./mascotas";
import { TipoAtencion } from "./tipo-atencion";

export interface Atenciones {

    codAtencion : number;
    codMascota:number;
    idtipoAtencion:number;
    fecha:string;
    hora:string;
    estado:number;

    objMascota:Mascotas;
    objTipoAtencion:TipoAtencion;

}
