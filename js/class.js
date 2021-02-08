import { epicerie, bol, couteau, poele} from "./instances.js";

class Personne {
    constructor(nom,lieu,argent){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainGauche = [];
        this.seDeplacer = (depart,destination) => {
            destination.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this),1);
            this.lieu = destination;
            console.log(`${this.nom} est actuellemement à la/l' ${this.lieu.nom}`);
        }
        this.couper = () => {
            bol.contenu.forEach(element => {
                couteau.couper(element);
            });
        }
        this.melanger = (nomMelange) => {
            bol.melanger(nomMelange)
        }
        this.prendrePanier = (endroit) => {
            if (endroit.nom == "Epicerie") {
                this.mainDroite.push(endroit.bacPaniers.shift());
                console.log(`${this.nom} a pris le ${this.mainDroite[0].type}`);
            }else {
                console.log(`${this.nom} n'êtes pas à l'epicerie, vous ne pouvez pas prendre de panier.`);
            }
        }
        this.remettrePanier = (endroit) => {
            if (endroit.nom == "Epicerie") {
                endroit.bacPaniers.push(this.mainDroite.shift());
                console.log(`${this.nom} a remis le ${endroit.bacPaniers[endroit.bacPaniers.length-1].type}`);
            }else {
                console.log(`${this.nom} n'êtes pas à l'epicerie, vous ne pouvez pas prendre de panier.`);
            }
        }
        this.acheter = (endroit) => {
            if (endroit.nom == "Epicerie") {
                endroit.ingredients.forEach(element => {
                    this.mainDroite[0].contenu.push(element);
                    this.argent -= element.prix;
                    console.log(`${this.nom} avez acheter ${element.nom} au prix de : ${element.prix}$`);
                });
            }else {
                console.log(`${this.nom} n'êtes pas à l'epicerie, vous ne pouvez pas prendre d'articles.`);
            }
        }
        this.vider = () => {
            while(this.mainDroite[0].contenu.length > 0){
                console.log(`${this.nom} avez ajouté ${this.mainDroite[0].contenu[0].nom}`);
                bol.contenu.push(this.mainDroite[0].contenu.shift());
            }
        }
        this.viderBol = () => {
            poele.contenu.push(bol.contenu.shift());
            console.log(`${this.nom} vide le bol dans la poele`);
        }
    }
}

class Lieu {
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Ingredients {
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export {Personne,Lieu,Ingredients};