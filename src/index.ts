import {
  groupByKey,
  groupByFunction,
  sumArray
} from './array';

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
  },
  {
    name: 'Frank',
    age: 6,
    breed: 'Cat',
    milesWalked: 0
  }
];

const groupByBreed = groupByKey(dogs, 'breed');
console.log(groupByBreed);

const groupByBreedWithFunction = groupByFunction(
  dogs,
  (dog) => dog.age
);
console.log(groupByBreedWithFunction);

const totalMilesWalkedByDogs = sumArray(dogs, (dog) => dog.milesWalked);
console.log(totalMilesWalkedByDogs);
const totalAgeOfDogs = sumArray(dogs, (dog) => dog.age);
console.log(totalAgeOfDogs);
