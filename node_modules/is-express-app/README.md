<img src="https://user-images.githubusercontent.com/11332183/34917886-61e003f4-f94c-11e7-945c-9ff9253b491b.png" style="margin-bottom: 40px; max-width: 100%; max-height: 60px;">

# Is Express App

Function to check if the argument is an instance created by express (`express()`)

## Install

`npm install --save is-express-app`

or with yarn:

`yarn add is-express-app`

## Usage

### True

```
import express from 'express'
import isExpressApp from 'is-express-app'

console.log(isExpressApp(express()))
```

### False

```
import isExpressApp from 'is-express-app'

console.log(isExpressApp(() => {})))
console.log(isExpressApp(null)))
console.log(isExpressApp({})))
console.log(isExpressApp([])))
// ...
```
