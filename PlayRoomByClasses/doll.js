'use strict';

let Toy = require('./toy');

module.exports = class Doll extends Toy {

    constructor (name, size, cost, ageGroupe, dress, voice) {
        super(name, size, cost, ageGroupe);
        this.dress = dress;
        this.voice = voice;
    }
}