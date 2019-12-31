# udemy-using-typescript-with-react

install
yarn add -D typescript

tsconfig.json作成
npx tsc --init

tsconfig.json
"esModuleInterop": true,
例: reactを読むこむときに*が不要
import * as React from 'react';
import React from 'react';

terminalで動作確認
yarn add -D nodemon concurrently
npx concurrently -k -n COMPILER,NODEMON -c yellow,blue "tsc -w" "nodemon -w dist -q dist/index.js"
