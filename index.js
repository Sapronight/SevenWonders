const gulp = require('gulp');
const {City} = require('./app/city');
const {army} = require('./app/army');



const bBottom = new City('Bikini bottom', 'Bob l\'éponge');
const WallOfDeath = new army(5000, 'WallOfDeath', 500000, 25);

bBottom.spawnArmy('Peon');
bBottom.spawnArmy('Dragon');
bBottom.spawnArmy('Peon');
bBottom.spawnArmy('Shield');
bBottom.actionArmy(WallOfDeath);
bBottom.actionArmy(WallOfDeath);



setInterval(() => bBottom.showInfoCity(), 1000);
setInterval(() => bBottom.giveCityCG(), 2000);


