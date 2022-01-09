"use strict";
exports.__esModule = true;
exports.Scontrino = void 0;
var Scontrino = /** @class */ (function () {
    function Scontrino() {
        this._scontrino = new Array();
    }
    Scontrino.prototype.Add = function (Prod) {
        this._scontrino.push(Prod);
    };
    Scontrino.prototype.ToString = function () {
        var _conto = 0;
        for (var i = 0; i < this._scontrino.length; i++) {
            console.log("   Prodotto: " + this._scontrino[i].Nome + " --- Prezzo: " + this._scontrino[i].Prezzo + " euro --- Quantità: " + this._scontrino[i].Quantita + " --- Costo: " + this._scontrino[i].Costo() + " euro");
            _conto += this._scontrino[i].Costo();
        }
        console.log("Conto Totale: " + _conto);
    };
    return Scontrino;
}());
exports.Scontrino = Scontrino;
