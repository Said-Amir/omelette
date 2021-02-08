import {Personne, Lieu, Ingredients} from './class.js';

// **************** Instances de classes ******************************
// Lieux
let maison = new Lieu('Maison',[]);
let epicerie = new Lieu('Epicerie',[]);
epicerie.bacPaniers = [
    {type:'panier Bleu', contenu : []},
    {type:'panier Rouge', contenu : []},
    {type:'panier Jaune', contenu : []},
];
let nullePart = new Lieu('Nulle Part',[]);

// Personnes
let amine = new Personne('Amine',"NullePart",20200);

// Ingredients
let oeuf = new Ingredients('Oeuf','entier',2);
let sel = new Ingredients('Sel','moulu',1);
let poivre = new Ingredients('poivre','moulu',3);
let lait = new Ingredients('Lait','liquide',1.5);
let poivron = new Ingredients('poivron','entier',3.5);

epicerie.ingredients = [oeuf,sel,poivre,lait,poivron];
// ********************* Objets simples *******************************
let bol = {
    nom : 'bol',
    contenu : [],
    melanger(nomMelange){
        let newMelange = {
            nom : nomMelange,
            etat : 'pas cuit'
        }
        while(this.contenu.length > 0) {
            this.contenu.shift();
        }
        this.contenu.push(newMelange);
    }
}

let couteau = {
    nom : 'Couteau',
    couper(ingredient){
        if (ingredient.etat == 'entier') {
            ingredient.etat = 'coupé';
            console.log(`Je découpe ${ingredient.nom}` );
        }
    }
}

let poele = {
    nom : 'Poele',
    contenu : [],
    cuir(){
        setTimeout(()=> {this.contenu[0].etat = 'cuite';
        console.log(`Votre omelette est prête !`);
    }, 4000)
    } 
}

export {maison,epicerie,amine,oeuf,sel,poivre,lait,poivron,bol,couteau,poele,nullePart};