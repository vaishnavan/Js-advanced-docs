---
sidebar_position: 3
---

# Variables

Data is stored in variables to allocate some memory space to assign different types of values. Early in Javascript, we used the `var` keyword to assign variables

## Var

```js
var username = "siva"
var city = "chennai"
var num = 45
```

In var, we can override the value and keyword

```js
var a = 10;
a = 20 // now a value is 20
var a = 30 // now a value is 30
```
A modern way of declaring a variable in Javascript using the `Let` and `Const` keywords.

The statement below creates a variable with the name username

## Let

```js 
let username = "Sakthi"
```
On the `let` keyword, we can reassign the values for the same variable name

```js
let username = "Sakthi"
username = "Siva"
```
## Const
On the `const` keyword, we can't reassign or redeclare the variable

```js
const username = "Sakthi"
const username = "Siva" // assignment to constant variable //error
```
## Summary

We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.