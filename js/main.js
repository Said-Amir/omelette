import {maison,epicerie,amine,bol,poele,nullePart} from './instances.js';

nullePart.personnes.push(amine);
amine.lieu = nullePart;

amine.seDeplacer(nullePart, maison);
amine.seDeplacer(maison, epicerie);

amine.prendrePanier(epicerie);

amine.acheter(epicerie);

amine.seDeplacer(epicerie, maison);

amine.vider();

amine.seDeplacer(maison,epicerie);

amine.remettrePanier(epicerie);

amine.seDeplacer(epicerie, maison);

amine.couper();

amine.melanger('omelette');

amine.viderBol();

console.log(poele);

poele.cuir();

console.log(poele.contenu[0]);

setTimeout(()=> {
    console.log(poele.contenu[0]);
}, 5000);