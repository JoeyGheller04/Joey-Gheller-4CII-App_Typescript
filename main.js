"use strict";
exports.__esModule = true;
var Prodotto_1 = require("./Prodotto");
var Scontrino_1 = require("./Scontrino");
var ProdottiAcquistati = new Scontrino_1.Scontrino;
ProdottiAcquistati.Add(new Prodotto_1.Prodotto("Pepsi", 2, 5));
ProdottiAcquistati.Add(new Prodotto_1.Prodotto("Coca Cola", 3, 2));
ProdottiAcquistati.Add(new Prodotto_1.Prodotto("Sprite", 3, 1));
ProdottiAcquistati.Add(new Prodotto_1.Prodotto("The", 1, 5));
ProdottiAcquistati.Add(new Prodotto_1.Prodotto("Acqua", 1, 10));
ProdottiAcquistati.ToString();
