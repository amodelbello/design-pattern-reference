const firstObject = {
  greet: () => console.log('hello first'),
  name: 'first',
  age: 10,
};

const secondObject = Object.assign({}, firstObject);

secondObject.greet = () => console.log('SECOND!!!');
secondObject.name = 'second';
secondObject.age = 25;

console.log(firstObject);
firstObject.greet();
console.log(secondObject);
secondObject.greet();
