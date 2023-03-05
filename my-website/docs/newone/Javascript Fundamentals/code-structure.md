---
sidebar_position: 2
---

# Code Structure

The first thing we’ll study is the building blocks of code.

## Statements

Statements are syntax constructs and commands that perform actions.

Semi-colons are mostly used to add a linebreak to our statements. If statements are separated by new lines, we can omit the semi-colons.

For example, here we split `"Hello World"` into two alerts:

```js
alert('hello'); alert('world');
```

Usually, codes are written on a new line to make the code more readable:

```js
alert('hello'); 
alert('world');
```
## Comments

In every programming language adding comments plays a vital role in explaining our functionality and code written. Javascript also has a comment feature. Let's see how to do

```js
    // single-line comment
    /** 
     * multi-line comment
     * Commenting in multiple lines adds a more concise explanation
    */
```

:::info
    Shortcut used for adding comments,

    On Windows,

    Single-line comments - Ctrl+/

    Multi-line comments - Ctrl+shift+/

    On Mac,

    Single-line comments - Cmd+/

    Multi-line comments - Cmd+option+/
:::

:::caution
    There may not be /*...*/ inside another /*...*/.
:::

Comments increase the overall code footprint, but that’s not a problem at all. There are many tools which minify code before publishing to a production server. They remove comments, so they don’t appear in the working scripts. Therefore, comments do not have negative effects on production at all.