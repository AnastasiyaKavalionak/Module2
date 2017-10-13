'use strict';

let Toy = require('./toy');

module.exports = class Kit extends Toy {

    constructor (name, size, cost, ageGroupe, count, type) {
        super(name, size, cost, ageGroupe);
        this.count = count;
        this.type = type;
    }
}