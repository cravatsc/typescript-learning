import { objectListForAttribute, sumArray } from './array';

console.log('hello');

interface Dog {
  name: string;
  age: number;
  breed: string;
  milesWalked: number;
}

const dogs: Dog[] = [
  {
    name: 'Morgan',
    age: 12,
    breed: 'Lab',
    milesWalked: 1
  },
  {
    name: 'James',
    age: 9,
    breed: 'Lab',
    milesWalked: 5
  },
  {
    name: 'Ernie',
    age: 3,
    breed: 'Bernie',
    milesWalked: 6
  }
];

const groupByBreed = objectListForAttribute(dogs, 'breed');
console.log(groupByBreed);

const totalMilesWalkedByDogs = sumArray(dogs, (dog) => dog.milesWalked);
console.log(totalMilesWalkedByDogs);
const totalAgeOfDogs = sumArray(dogs, (dog) => dog.age);
console.log(totalAgeOfDogs);
