---
sidebar_position: 1
---

# Patterns programs in JS

In this article, we will learn to print the different Number pattern programs in JavaScript.

### Number pattern programs in JavaScript:-

## Pattern 1

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col = 1; col <= num; col++){
        str += col + " ";
    }
    str += "\n";
}
console.log(str)
```
`output:-`

```text
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
```

## Pattern 2

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col = 1; col <= num; col++){
        str += row + " ";
    }
    str += "\n";
}
console.log(str)
```
`output:-`

```text
1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5 
```
## Pattern 3

```js
let num = 5;
let str = "";
for(let row = num; row >= 1; row--){
    for(let col = num; col >= 1; col--){
        str += col + " ";
    }
    str += "\n";
}
console.log(str)
```
`output:-`

```text
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
```

## Pattern 4

```js
let num = 5;
let str = "";
for(let row = num; row >= 1; row--){
    for(let col = num; col >= 1; col--){
        str += row + " ";
    }
    str += "\n";
}
console.log(str)
```
`output:-`

```text
5 5 5 5 5 
4 4 4 4 4 
3 3 3 3 3 
2 2 2 2 2 
1 1 1 1 1 
```
## Pattern 5

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col = 1; col <= row; col++){
        str += col + " ";
    }
    str += "\n";
}

console.log(str)
```
`output:-`

```text
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
```

## Pattern 6

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col = 1; col <= row; col++){
        str += row + " ";
    }
    str += "\n";
}

console.log(str)
```
`output:-`

```text
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5
```

## Pattern 7

```js
let num = 5;
let str = "";
for(let row = 1; row <= 2*num; row++){
    let c = row > num ? 2*num - row : row;
    for(let col = 1 ; col <= c; col++){
        str += col + " "
    }
    str += "\n"
}

console.log(str)
```
`output:-`

```text
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
```

## Pattern 8

```js
let num = 5;
let str = "";
for(let row = 1; row <= 2*num; row++){
    let c = row > num ? row - num: num - row + 1;
    for(let col = 1 ; col <= c; col++){
        str += col + " "
    }
    str += "\n"
}

console.log(str)
```
`output:-`

```text
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5  
```

## Pattern 9

```js
let num = 5;
let str = "";
for(let row = 2*num; row >= 1; row--){
    let c = row > num ? row - num: num - row + 1;
    for(let col = c ; col >= 1; col--){
        str += col + " "
    }
    str += "\n"
}

console.log(str)
```
`output:-`

```text
5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1 
1 
2 1 
3 2 1 
4 3 2 1 
5 4 3 2 1   
```

## Pattern 10

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let s = 1; s <= num - row; s++){
        str += " ";
    }
    for(let col = 1; col<= row; col++){
        str += col + " ";
    }
    str += "\n";
}
console.log(str)
```
`output:-`

```text
    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5   
```

## Pattern 11

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col= num; col >=row; col--){
        str += col + " ";
    }
    str += "\n"
}
console.log(str)
```
`output:-`

```text
5 4 3 2 1 
5 4 3 2 
5 4 3 
5 4 
5  
```

## Pattern 12

```js
let num = 5;
let str = "";
for(let row = num; row >= 1; row--){
    for(let col= num; col >=row; col--){
        str += col + " ";
    }
    str += "\n"
}
console.log(str)
```
`output:-`

```text
5 
5 4 
5 4 3 
5 4 3 2 
5 4 3 2 1
```

## Pattern 13

```js
let num = 5;
let str = "";
for(let row = num; row >= 1; row--){
    for(let col= 1; col <=row; col++){
        str += col + " ";
    }
    str += "\n"
}
console.log(str)
```
`output:-`

```text
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1
```

## Pattern 14

```js
let num = 5;
let k = 1;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col= 1; col <=row; col++){
        str += k + " ";
        k++;
    }
    str += "\n"
}
console.log(str)
```
`output:-`

```text
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
```

## Pattern 15

```js
let num = 5;
let k = 1;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col= 1; col <=row; col++){
        str += k + " ";
        k++;
    }
    str += "\n"
}
console.log(str)
```
`output:-`

```text
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
```

## Pattern 16

```js
let num = 5;
let str = "";
for(let row = 1; row <= num; row++){
    for(let col= row; col >= 1; col--){
        str += col + " ";
    }
    str += "\n"
}
console.log(str)
```
`output:-`

```text
1 
2 1 
3 2 1 
4 3 2 1 
5 4 3 2 1 
```