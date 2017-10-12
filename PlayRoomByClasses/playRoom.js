'use strict';

class PlayRoom {
	constructor (name, countOfToys, maxCostOfToys, ageGroup) {
		this.name = name;
		this.toys = [];
		this.countOfToys = CountOfToys;
		this.maxCostOfToys = maxCostOfToys;
		this.ageGroup = ageGroup;
	}

	sortToys (parameter) {
		if (parameter !== undefined) {
			return this.toys.sort(function (a, b) {
				if (a[parameter] > b[parameter]) { return 1;}
				if (a[parameter] < b[parameter]) { return -1;}
			})
		} else {
			console.log('Parameter for sorting is undefined.');
		}
	}

	findToy (parameter, valueMin, valueMax) {
		let findedToys = [];
		if (parameter !== undefined) {
			if (valueMin === undefined && valueMax === undefined) {
				for (let i = 0; i < this.toys.length; i++) {
					if (this.toys[i][parameter] !== undefined) {
						findedToys.push(this.toys[i]);
					}
				}
				return findedToys;
			}
			if (valueMin !== undefined && valueMax === undefined) {
				for (let i = 0; i < this.toys.length; i++) {
					if (this.toys[i][parameter] >= valueMin) {
						findedToys.push(this.toys[i]);
					}
				}
				return findedToys;
			}
			if (valueMin === undefined && valueMax !== undefined) {
				for (let i = 0; i < this.toys.length; i++) {
					if (this.toys[i][parameter] <= valueMax) {
						findedToys.push(this.toys[i]);
					}
				}
				return findedToys;
			}
			for (let i = 0; i < this.toys.length; i++) {
				if (this.toys[i][parameter] >= valueMin && this.toys[i][parameter] <= valueMax) {
					findedToys.push(this.toys[i]);
				}
			}
			return findedToys;
		} else {
			console.log('Parameter for finding is undefined.');
		}
	}

	fillRoom(catalog) {
		let sum = 0, counter = this.countOfToys, flag = 1;
		let toy;
        let sizes = ['big', 'middle', 'small'];
		while (counter > 0) {
            for (let i = 0; i < sizes.length; i++) {
                toy = catalog.findToy(this.ageGroup, sizes[i], (this.maxCostOfToys - sum) / counter);
                if (!isNumber(toy)) {
                    this.toys.push(toy);
                    counter--;
                    sum += toy.cost;
                    flag = 0;
                }
            }
            if(flag) {
                counter += flag;
                flag = 0;
            } else {
                flag = 1;
            }
        }
	}
}