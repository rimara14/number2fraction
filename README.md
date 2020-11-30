[![codecov](https://codecov.io/gh/rimara14/number2fraction/branch/master/graph/badge.svg?token=7PGMPH66IV)](https://codecov.io/gh/rimara14/number2fraction)

## Introduction
***Number2fraction** is a library to convert convert decimal number to fraction in string and vice versa.* 
For example, `0.5 -> 1/2` or `3/4 -> 0.75`

## Installation
```bash
npm install number2fraction --save
```

## Usage
```ts
import { number2fraction, fraction2number } from 'number2fraction';

number2fraction(0.25) // 1/4
number2fraction(0.5) // 1/2
number2fraction(0.75) // 3/4
number2fraction(0.667) // 667/1000
    
fraction2number('1/2') // 0.5
fraction2number('1/4') // 0.25
fraction2number('3/4') // 0.75
fraction2number('2/3') // 0.667
```
