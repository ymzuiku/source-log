# source-log

Log code source line

## Install

```bash
npm install source-log --save
# or
pnpm add source-log
# or
yarn add source-log
```

## Use

```ts
import {sourceLog} from 'source-log"

sourceLog("hello");
```

Show this log:

```bash
src/some_test.ts:10:13
hello
```
