import sum from './sum'

const greeter = (name = 'User') => {
  return `Hello ${name}!`
}

export {
  sum,
  greeter
}
