export class Prodotto {

    private _nome: string;
    private _prezzo: number;
    private _quantita: number;

    constructor(nome: string, prezzo: number, quantita: number) {
        this._nome = nome;
        this._prezzo = prezzo;
        this._quantita = quantita;
    }

    public get Nome(): string { return this._nome; }
    public set Nome(value: string) { this._nome = value; }

    public get Prezzo(): number { return this._prezzo; }
    public set Prezzo(value: number) { this._prezzo = value; }

    public get Quantita(): number { return this._quantita; }
    public set Quantita(value: number) { this._quantita = value; }

    ToString(){
        console.log("   Prodotto: " + this.Nome + " --- Prezzo: " + this.Prezzo + " euro --- Quantità: " + this.Quantita+ " --- Costo: " + this.Costo() + " euro");
    }

    Costo():number{
        return this.Quantita * this.Prezzo;
    }
}
