const {City} = require('./app/city');
const {Army} = require('./app/army');

const bBottom = new City('Bikini bottom', 'Bob l\'éponge', 'Caravane');
const wallOfDeath = new Army(5000, 'WallOfDeath', 500000, 25);



setInterval(() => bBottom.showInfoCity(), 1000);
setInterval(() => bBottom.updateArmy(), 2000);
setInterval(() => bBottom.giveCityCG(), 2000);
setInterval(() => bBottom.actionArmy(wallOfDeath), 5000);
setInterval(() => bBottom.tradingCity(), 10000);

