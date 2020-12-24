import { greeter } from '../index'

test('it should work with default arguments', () => {
  const resOne = greeter()
  expect(resOne).toEqual('Hello User!')
})

test('it should work with name argument', () => {
  const resOne = greeter('Matheus')
  expect(resOne).toEqual('Hello Matheus!')
})
