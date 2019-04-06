const gulp = require('gulp');
const {City} = require('./app/city');
const {army} = require('./app/army');



const bBottom = new City('Bikini bottom', 'Bob l\'éponge');
const Dragon = new army(500, 'Dragon', 500, 50);
const Peon = new army(10, 'Peon', 50, 10);
Dragon.toString();
Dragon.combat(Peon);
Peon.toString();



/*
setInterval(() => bBottom.showShit(), 1000);
setInterval(() => bBottom.giveShit(), 2000);
*/

