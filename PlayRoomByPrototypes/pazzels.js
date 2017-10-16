'use strict';

let Toy = require('./toy');

function Pazzles (name, size, cost, ageGroupe, power) {
            Toy.call(this, name, size, cost, ageGroupe);
            this.power = power;
        }
Pazzles.prototype = Object.create(Toy.prototype);
Pazzles.prototype.constructor = Pazzles;

module.exports = Pazzles;
