const {City} = require('./app/city');
const {Army} = require('./app/army');

const bBottom = new City('Bikini bottom', 'Bob l\'éponge', 'Caravane');
const wallOfDeath = new Army(5000, 'WallOfDeath', 500000, 25);

bBottom.spawnArmy('Peon');
bBottom.spawnArmy('Dragon');
bBottom.spawnArmy('Peon');
bBottom.spawnArmy('Shield');
bBottom.actionArmy(wallOfDeath);
bBottom.actionArmy(wallOfDeath);
bBottom.actionArmy(wallOfDeath);
bBottom.actionArmy(wallOfDeath);

setInterval(() => bBottom.showInfoCity(), 1000);
setInterval(() => bBottom.giveCityCG(), 2000);
setInterval(() => bBottom.tradingCity(), 10000);

