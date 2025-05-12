// Definición de la clase Persona
export class Persona {

    // Atributo privado para almacenar el nombre de usuario
    private _usuario!: string;
    // Getter para obtener el valor de usuario
    public get usuario(): string {
        return this._usuario;
    }
    // Setter para establecer el valor de usuario
    public set usuario(v: string) {
        this._usuario = v;
    }

    private _nombre!: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(v: string) {
        this._nombre = v;
    }

    private _apellido!: string;
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(v: string) {
        this._apellido = v;
    }

    private _edad!: number;
    public get edad(): number {
        return this._edad;
    }
    public set edad(v: number) {
        this._edad = v;
    }

    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }
}