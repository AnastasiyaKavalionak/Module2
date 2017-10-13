'use strict';

let Toy = require('./toy');

module.exports = class Pazzles extends Toy {

        constructor (name, size, cost, ageGroupe, power) {
            super(name, size, cost, ageGroupe);
            this.power = power;
        }
    }
