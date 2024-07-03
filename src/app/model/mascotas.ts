import { TipoMascotas } from "./tipo-mascotas";

export interface Mascotas {


    codMascota: number;
    nomMascota:string;
    nomDueno:string;
    peso:number;
    idtipoMascota:number;

    objTipoMascota:TipoMascotas;
}
