<img src="https://user-images.githubusercontent.com/11332183/34825261-16fc4b30-f6d2-11e7-9ae4-1c4f036d9048.jpg" width="200" style="margin-bottom: 40px;" />

# is-async-await

A small function that checks if the passed in argument is an async function

## installation

`npm i --save is-async-await`

or if using yarn

`yarn add is-async-await`

## usage

```
import isAsync from 'is-async-await'

// True
console.log(isAsync(async function fn() {})) // true
console.log(isAsync(async () => {})) // true

// False
console.log(() => {}) // false
console.log(function fn() {}) // false
console.log({}) // false
console.log([]) // false
console.log('String') // false
console.log(0) // false
// ...
```
