'use strict';

let Doll = require('./doll');
let Ball = require('./ball');
let Kit = require('./kit');
let Pazzles = require('./pazzels');
let Catalog = require('./catalog');
let PlayRoom = require('./playRoom');

let catalog = new Catalog();
catalog.addToy(new Doll('Angelina', 'big', 15.8, 'preschoolers', 'angel-dress', false));
catalog.addToy(new Doll('Ania', 'middle', 3.3, 'preschoolers', 'dress', false));
catalog.addToy(new Doll('Fairy', 'small', 5.1, 'juniorSchoolers', 'costume', true));
catalog.addToy(new Ball('Play-with-me ball', 'middle', 10.2, 'nursery', 'caoutchouc'));
catalog.addToy(new Ball('Football ball', 'middle', 10.2, 'preschoolers', 'leather'));
catalog.addToy(new Ball('Beach ball', 'big', 8, 'nursery', 'plastic'));
catalog.addToy(new Ball('Tennis ball', 'small', 10.2, 'juniorSchoolers', 'caoutchouc'));
catalog.addToy(new Kit('Lego robot', 'middle', 20.5, 'teens', 3000, 'lego and programming'));
catalog.addToy(new Kit('Lego car', 'small', 10.9, 'juniorSchoolers', 100, 'lego'));
catalog.addToy(new Kit('Jang ingeneer', 'big', 10.9, 'juniorSchoolers', 5000, 'constructing'));
catalog.addToy(new Pazzles('Mona Lisa', 'big', 55, 'teens', 70000));
catalog.addToy(new Pazzles('Fox', 'small', 5, 'nursery', 10));
catalog.addToy(new Pazzles('Cinderella', 'middle', 7, 'preschoolers', 100));
catalog.addToy(new Pazzles('Ariel', 'middle', 7, 'preschoolers', 100));
catalog.addToy(new Pazzles('Dinosaurs', 'middle', 13, 'preschoolers', 250));
catalog.addToy(new Pazzles('Dinosaurs', 'middle', 13, 'preschoolers', 250));
let roomForPreschoolers = new PlayRoom("room №1", 2, 20, "preschoolers");
roomForPreschoolers.fillRoom(catalog);
console.log(roomForPreschoolers.toys);