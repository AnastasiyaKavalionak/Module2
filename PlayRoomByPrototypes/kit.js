'use strict';

let Toy = require('./toy');

function Kit (name, size, cost, ageGroupe, count, type) {
        Toy.call(this, name, size, cost, ageGroupe);
        this.count = count;
        this.type = type;
    }
Kit.prototype = Object.create(Toy.prototype);
Kit.prototype.constructor = Kit;

module.exports = Kit;