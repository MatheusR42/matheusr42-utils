import sum from './sum'
import concat from './concat'

const greeter = (name = 'User') => {
  return `Hello ${name}!`
}

const alo = () => {
  console.log('test')
  console.log(sum(1, 2) + concat('1', '2'))
}

export {
  sum,
  concat,
  greeter,
  alo
}
