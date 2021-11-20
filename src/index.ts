import { objectListForAttribute } from './array';

console.log('hello');

interface Dog {
  name: string;
  age: number;
  breed: string;
}

const dogs: Dog[] = [
  {
    name: 'Morgan',
    age: 12,
    breed: 'Lab'
  },
  {
    name: 'James',
    age: 9,
    breed: 'Lab'
  },
  {
    name: 'Ernie',
    age: 3,
    breed: 'Bernie'
  }
];

const groupByBreed = objectListForAttribute(dogs, 'breed');
console.log(groupByBreed);
