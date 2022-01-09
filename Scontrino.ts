import { Prodotto } from "./Prodotto";

export class Scontrino {

    public _scontrino: Array<Prodotto>;

    constructor() {
        this._scontrino = new Array<Prodotto>();
    }

    Add(Prod: Prodotto){
        this._scontrino.push(Prod);
    }

    ToString(){
        let _conto: number = 0;

        for(let i=0; i<this._scontrino.length; i++){
            
            console.log("   Prodotto: " + this._scontrino[i].Nome + " --- Prezzo: " + this._scontrino[i].Prezzo + " euro --- Quantità: " + this._scontrino[i].Quantita + " --- Costo: " + this._scontrino[i].Costo() + " euro");
            
            _conto += this._scontrino[i].Costo();
        }

        console.log("Conto Totale: " + _conto);
    }
}
