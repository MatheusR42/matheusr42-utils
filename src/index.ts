import sum from './sum'
import concat from './concat'

const greeter = (name = 'User') => {
  return `Hello ${name}!`
}

console.log(sum(1, 2) + concat('1', '2'))

export {
  sum,
  concat,
  greeter
}
