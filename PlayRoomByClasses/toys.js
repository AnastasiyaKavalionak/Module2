'use strict';

class Toy {

    constructor (name, size, cost, ageGroupe) {
        this.name = name;
        this.size = size;
        this.cost = cost;
        this.ageGroupe = ageGroupe;
    }
}

class Doll extends Toy {

    constructor (name, size, cost, ageGroupe, dress, voice) {
        super(name, size, cost, ageGroupe);
        this.dress = dress;
        this.voice = voice;
    }
}

class Ball extends Toy {

    constructor (name, size, cost, ageGroupe, matherial) {
        super(name, size, cost, ageGroupe);
        this.material = matherial;
    }
}

class Pazzles extends Toy {

    constructor (name, size, cost, ageGroupe, power) {
        super(name, size, cost, ageGroupe);
        this.power = power;
    }
}

class Car extends Toy {

    constructor (name, size, cost, ageGroupe, type) {
        super(name, size, cost, ageGroupe);
        this.type = type;
    }
}

class Kit extends Toy {

    constructor (name, size, cost, ageGroupe, count, type) {
        super(name, size, cost, ageGroupe);
        this.count = count;
        this.type = type;
    }
}

class Animal extends Toy {

    constructor (name, size, cost, ageGroupe, matherial, voice) {
        super(name, size, cost, ageGroupe);
        this.matherial = matherial;
        this.voice = voice;
    }
}

class Utensil extends Toy {

    constructor (name, size, cost, ageGroupe, matherial, count) {
        super(name, size, cost, ageGroupe);
        this.matherial = matherial;
        this. count = count;
    }
}