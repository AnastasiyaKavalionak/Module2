'use strict';

let Toy = require('./toy');

function Doll (name, size, cost, ageGroupe, dress, voice) {
    Toy.call(this, name, size, cost, ageGroupe);
        this.dress = dress;
        this.voice = voice;
    }
Doll.prototype = Object.create(Toy.prototype);
Doll.prototype.constructor = Doll;

module.exports = Doll;