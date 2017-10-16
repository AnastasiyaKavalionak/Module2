'use strict';

let Toy = require('./toy');

function Ball (name, size, cost, ageGroupe, matherial) {
        Toy.call(this, name, size, cost, ageGroupe);
        this.material = matherial;
    }
Ball.prototype = Object.create(Toy.prototype);
Ball.prototype.constructor = Ball;

module.exports = Ball;