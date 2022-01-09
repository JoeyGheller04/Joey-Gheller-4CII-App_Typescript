"use strict";
exports.__esModule = true;
exports.Prodotto = void 0;
var Prodotto = /** @class */ (function () {
    function Prodotto(nome, prezzo, quantita) {
        this._nome = nome;
        this._prezzo = prezzo;
        this._quantita = quantita;
    }
    Object.defineProperty(Prodotto.prototype, "Nome", {
        get: function () { return this._nome; },
        set: function (value) { this._nome = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prodotto.prototype, "Prezzo", {
        get: function () { return this._prezzo; },
        set: function (value) { this._prezzo = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prodotto.prototype, "Quantita", {
        get: function () { return this._quantita; },
        set: function (value) { this._quantita = value; },
        enumerable: false,
        configurable: true
    });
    Prodotto.prototype.ToString = function () {
        console.log("   Prodotto: " + this.Nome + " --- Prezzo: " + this.Prezzo + " euro --- Quantità: " + this.Quantita + " --- Costo: " + this.Costo() + " euro");
    };
    Prodotto.prototype.Costo = function () {
        return this.Quantita * this.Prezzo;
    };
    return Prodotto;
}());
exports.Prodotto = Prodotto;
