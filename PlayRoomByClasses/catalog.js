'use strict';

class Catalog {

    constructor (jsonName) {
        this.source = require(jsonName);
        this.obgectOfCatalog = {catalog: []};
        this.formCatalogByAge(infants);
        this.formCatalogByAge(nursery);
        this.formCatalogByAge(preschoolers);
        this.formCatalogByAge(juniorSchoolers);
        this.formCatalogByAge(teens);
    }

    formCatalogFromJSON(){
        for(let key in this.source.catalog){
            switch (key) {
                case 'dolls':
                    this.obgectOfCatalog.catalog.push(new Doll(this.source.catalog[key].name, this.source.catalog[key].size, this.source.catalog[key].cost, this.source.catalog[key].ageGroup, this.source.catalog[key].dress, this.source.catalog[key].voice));
                    break;
                case 'balls':
                    this.obgectOfCatalog.catalog.push(new Ball(this.source.catalog[key].name, this.source.catalog[key].size, this.source.catalog[key].cost, this.source.catalog[key].ageGroup, this.source.catalog[key].matherial));
                    break;
                case 'cars':
                    this.obgectOfCatalog.catalog.push(new Car(this.source.catalog[key].name, this.source.catalog[key].size, this.source.catalog[key].cost, this.source.catalog[key].ageGroup, this.source.catalog[key].type));
                    break;
                case 'animals':
                    this.obgectOfCatalog.catalog.push(new Animal(this.source.catalog[key].name, this.source.catalog[key].size, this.source.catalog[key].cost, this.source.catalog[key].ageGroup, this.source.catalog[key].matherial, this.source.catalog[key].voice));
                    break;
                case 'utensil':
                    this.obgectOfCatalog.catalog.push(new Utensil(this.source.catalog[key].name, this.source.catalog[key].size, this.source.catalog[key].cost, this.source.catalog[key].ageGroup, this.source.catalog[key].matherial, this.source.catalog[key].count));
                    break;
            }
        }
    }
    formCatalogByAge (ageBranche) {
        this.ageBranche.big = [];
        this.ageBranche.middle = [];
        this.ageBranche.small = [];
        for (let i = 0; i < this.obgectOfCatalog.catalog.length; i++) {
            if (this.obgectOfCatalog.catalog[i].ageGroup.toLowerCase() === ageBranche.toLowerCase()) {
                switch (catalog[i].size.toLowerCase()) {
                    case 'big':
                        this.ageBranche.big.push(catalog[i]);
                        break;
                    case 'middle':
                        this.ageBranche.middle.push(catalog[i]);
                        break;
                    case 'small':
                        this.ageBranche.small.push(catalog[i]);
                        break;
                }
            }
        }
        function byCost(a, b) {
            if (a.cost > b.cost) {return 1;}
            if (a.cost < b.cost) {return -1;}
        }
        this.ageBranche.small.sort(byCost);
        this.ageBranche.middle.sort(byCost);
        this.ageBranche.big.sort(byCost);
    }

    findToy(age, size, cost) {
        if (this[age][size][0] === cost) {
            return this[age][size][0];
        }
        if (this[age][size][this[age][size].length -1] === cost) {
            return this[age][size][this[age][size].length -1];
        }
        if (this[age][size][0] < cost && this[age][size][this[age][size].length -1] > cost) {
            for (let i = Math.floor(this[age][size].length / 2); i > 0;) {
                if (this[age][size][i].cost === cost) {
                    return this[age][size][i - 1];
                }
                if (this[age][size][i].cost < cost && this[age][size][i - 1].cost >= cost) {
                    returnthis[age][size][i - 1];
                }
                if (this[age][size][i].cost < cost && this[age][size][i - 1].cost < cost) {
                    i = Math.floor(i * 0.5);
                }
                if (this[age][size][i].cost > cost && this[age][size][i + 1].cost <= cost) {
                    returnthis[age][size][i];
                }
                if (this[age][size][i].cost > cost && this[age][size][i + 1].cost > cost) {
                    i = Math.floor(i * 1.5);
                }
            }
        }
        if (this[age][size][0] > cost) {
            return -1;
        }
        if (this[age][size][this[age][size].length -1] < cost) {
            return 1;
        }
    }
}

