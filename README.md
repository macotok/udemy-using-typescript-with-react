# udemy-using-typescript-with-react

## set up

- install

```terminal
$ yarn add -D typescript
```

- tsconfig.json作成

```terminal
$ npx tsc --init
```

```json: tsconfig.json
"esModuleInterop": true,
例: reactを読むこむときに*が不要
import * as React from 'react';
import React from 'react';
```

- terminalで動作確認

```terminal
yarn add -D nodemon concurrently
npx concurrently -k -n COMPILER,NODEMON -c yellow,blue "tsc -w" "nodemon -w dist -q dist/index.js"
```

### Interfaces

``` typescript
interface Profile {
  readOnly name: string,
  age?: number;
}

let profile: Profile = {
  name: 'john',
}:

interface A {
  someProp: string;
  [key: string]: number;
}

const a: A = { someProp: 'some prop' };
a.x = 1;
a.y = 2;

interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = 'some prop';

interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {
  x: 'some prop',
  y: 'y prop',
  z: 'z prop'
}
```

### functions

```typescript
function sum(a: number, b?: number): number {
  return a + (b || 0);
};

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;


// Unknown number of arguments
function sumEverything(arg1: string, arg2: boolean, ...numbers: number[]): number {
  return numbers.reduce((result, num) => result + num, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}
```

### Class

- publicはclass外からもアクセスができる
- privateはclass内でしかアクセスできない
- protectedは継承したclassのプロパティにアクセス
- readonlyはプロパティにのみ書き込み可能
- プロパティの変更でsetter、getterを使用。そのときプロパティの接頭辞は_

### Generics

- 型引数を使用

```typescript
function hoge<T>(x: T) {
  console.log(x);
}

hoge<string>('foo');
hoge<number>(1);
```

### Union Typs

```typescript
interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  bark(): void;
  walk(): void;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();
  if ((<Dog>pet).bark) {
    (<Dog>pet).bark();
  } else {
    (<Cat>pet).meow();
  }
}


class Foo {
  foo: number;
  commonProp: string;
}

class Bar {
  bar: number;
  commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.Foo
  } else {
    obj.bar
  }
}
```
