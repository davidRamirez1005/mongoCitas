import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class User {

    @Expose({ name: 'usu_nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El usu_nombre es obligatoria`}}})
    usu_nombre: string;

    @Expose({ name: 'usu_segundo_nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El usu_segundo_nombre es obligatoria`}}})
    usu_segundo_nombre: string;

    @Expose({ name: 'usu_primer_apellido' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La usu_primer_apellido es obligatoria`}}})
    usu_primer_apellido: string;

    @Expose({ name: 'usu_segundo_apellido' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    usu_segundo_apellido: string;

    @Expose({ name: 'usu_telefono' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    usu_telefono: string;

    @Expose({ name: 'usu_direccion' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    usu_direccion: string;

    @Expose({ name: 'usu_email' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    usu_email: string;

    @Expose({ name: 'usu_tipodoc' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    usu_tipodoc: string;

    @Expose({ name: 'usu_genero' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    usu_genero: string;

    @Expose({ name: 'usu_acudiente' })
    @Transform(({ value }) => { if(value) return value ; else "faker"})
    usu_acudiente: number;

    constructor(data:Partial<User>) {
        Object.assign(this, data);
        this.usu_nombre = "Faker";
        this.usu_primer_apellido = "Faker";
        this.usu_telefono = "Faker";
        this.usu_direccion = "Faker";
        this.usu_tipodoc = "Faker";
        this.usu_acudiente = 0;
    }
}