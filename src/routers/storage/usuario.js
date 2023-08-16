var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class User {
    constructor(data) {
        Object.assign(this, data);
        this.usu_nombre = "Faker";
        this.usu_primer_apellido = "Faker";
        this.usu_telefono = "Faker";
        this.usu_direccion = "Faker";
        this.usu_tipodoc = "Faker";
        this.usu_acudiente = 0;
    }
}
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El usu_nombre es obligatoria` }; } }),
    __metadata("design:type", String)
], User.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segundo_nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El usu_segundo_nombre es obligatoria` }; } }),
    __metadata("design:type", String)
], User.prototype, "usu_segundo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_primer_apellido' }),
    IsDefined({ message: () => { throw { status: 422, message: `La usu_primer_apellido es obligatoria` }; } }),
    __metadata("design:type", String)
], User.prototype, "usu_primer_apellido", void 0);
__decorate([
    Expose({ name: 'usu_segundo_apellido' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", String)
], User.prototype, "usu_segundo_apellido", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", String)
], User.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], User.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], User.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'usu_tipodoc' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], User.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'usu_genero' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", String)
], User.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: 'usu_acudiente' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        "faker"; }),
    __metadata("design:type", Number)
], User.prototype, "usu_acudiente", void 0);
