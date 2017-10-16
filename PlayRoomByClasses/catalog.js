'use strict';

require('./toy');

module.exports = class Catalog {

    constructor () {
    }

    addToy (toy) {
        if (this[toy.ageGroup] === undefined){
            this[toy.ageGroup] = {[toy.size] : [toy]};
        } else {
            if (this[toy.ageGroup][toy.size] === undefined) {
                this[toy.ageGroup][toy.size] = [toy];
            } else {
                if (this[toy.ageGroup][toy.size].indexOf(toy) === -1) {
                    if (this[toy.ageGroup][toy.size][this[toy.ageGroup][toy.size].length - 1].cost < toy.cost) {
                        this[toy.ageGroup][toy.size].push(toy);
                    } else {
                        for (let i = 0; i < this[toy.ageGroup][toy.size].length; i++) {
                            if (this[toy.ageGroup][toy.size][i].cost > toy.cost) {
                                this[toy.ageGroup][toy.size].splice(i, 0, toy);
                                break;
                            }
                        }
                    }
                }
            }
        }

    }

    findToy(age, size, cost) {
        if (this[age][size] !== undefined) {
            if (this[age][size][0].cost === cost) {
                return this[age][size][0];
            }
            if (this[age][size][this[age][size].length - 1].cost === cost) {
                return this[age][size][this[age][size].length - 1];
            }
            if (this[age][size][0].cost < cost && this[age][size][this[age][size].length - 1].cost > cost) {

                for (let i = 1; i < this[age][size].length; i++) {
                    if (this[age][size][i].cost === cost) {
                        return this[age][size][i];
                    }
                    if (this[age][size][i].cost > cost) {
                        return this[age][size][i - 1];
                    }
                }
            }
            if (this[age][size][0].cost > cost) {
                return 0;
            }
            if (this[age][size][this[age][size].length - 1].cost < cost) {
                return this[age][size][this[age][size].length - 1].cost;
            }
        } else {
            return 0;
        }
    }
}