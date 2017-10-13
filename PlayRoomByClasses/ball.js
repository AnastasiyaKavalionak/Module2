'use strict';

let Toy = require('./toy');

module.exports = class Ball extends Toy {

    constructor (name, size, cost, ageGroupe, matherial) {
        super(name, size, cost, ageGroupe);
        this.material = matherial;
    }
}