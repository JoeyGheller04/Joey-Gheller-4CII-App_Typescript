import {Prodotto} from './Prodotto';
import {Scontrino} from './Scontrino';

let ProdottiAcquistati = new Scontrino;

ProdottiAcquistati.Add(new Prodotto("Pepsi",2,5));
ProdottiAcquistati.Add(new Prodotto("Coca Cola",3,2));
ProdottiAcquistati.Add(new Prodotto("Sprite",3,1));
ProdottiAcquistati.Add(new Prodotto("The",1,5));
ProdottiAcquistati.Add(new Prodotto("Acqua",1,10));
 
ProdottiAcquistati.ToString();