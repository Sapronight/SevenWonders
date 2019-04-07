const {City} = require('./app/city');

const bBottom = new City('Bikini bottom', "Bob l'éponge", 'Caravane');
const gothamCity = new City('gotham', 'Batman', 'BruceWayne');

bBottom.spawnArmy('Shield');
gothamCity.spawnArmy('Shield');

setInterval(() => console.log('---Info des villes :---'), 1000);
setInterval(() => bBottom.showInfoCity(), 1000);
setInterval(() => gothamCity.showInfoCity(), 1000);

setInterval(
  () => console.log('---Ajout des armées / Don de Corn et Gold:---'),
  2000
);
setInterval(() => bBottom.updateArmy(), 2000);
setInterval(() => gothamCity.updateArmy(), 2000);
setInterval(() => bBottom.giveCityCG(), 2000);
setInterval(() => gothamCity.giveCityCG(), 2000);

setInterval(() => console.log('---Tour combat:---'), 5000);
setInterval(() => bBottom.actionArmy(gothamCity.tableArmy_[0]), 5000);
setInterval(() => gothamCity.checkArmy(), 5100);
setInterval(() => gothamCity.actionArmy(bBottom.tableArmy_[0], 5200));
setInterval(() => bBottom.checkArmy(), 5300);

setInterval(() => console.log('---Echange:---'), 10000);
setInterval(() => bBottom.tradingCity(), 10000);
setInterval(() => gothamCity.tradingCity(), 10000);
