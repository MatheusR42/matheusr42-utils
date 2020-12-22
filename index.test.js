const greeter = require('./index')

console.log('Starting tests...');

const resOne = greeter()
if (resOne !== 'Hello User!') {
  throw new Error('greet not working with default arguments!')
}


const restTwo = greeter('Matheus')
if (restTwo !== 'Hello Matheus!') {
  throw new Error('greet not working with name argument!')
}
