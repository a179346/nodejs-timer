# nodejs-timer [![Build Status](https://travis-ci.org/a179346/nodejs-timer.svg?branch=main)](https://travis-ci.org/a179346/nodejs-timer)
Timer for Node.js

## Installation
```js
npm i nodejs-timer
```
## require
```js
const { Timer } = require('nodejs-timer');
```

## Links
[npm package](https://www.npmjs.com/package/nodejs-timer)
<br>
[Github page](https://github.com/a179346/nodejs-timer)

# Usage
  * [Construction](#Construction)
  * [start](#start)
  * [clear (stop)](#clearstop)
  * [isRunning](#isRunning)
  * [trigger](#trigger)
## Construction
#### `new Timer(timeoutEvent)` -> `Timer`
```js
// Create a timer
const timer = new Timer((param) => {
  console.log(param);
});
```
##### timeoutEvent<T extends any[]>
*Required*  
Type: `(...params: T) => void;`

---

## start
#### `timer.start(ms, ...params)` -> `boolean`
Returns false if the timer is already running. otherwise, return true.
```js
// start the timer
timer.start(1000, 'Hello nodejs-timer');
```
##### ms
*Required*  
Type: `number`   
Desc: milliseconds to trigger timeoutEvent
##### ...params
*Optional*  
Type: `T extends any[]`   
Desc: Parameters pass to timeoutEvent

---

## clear(stop)
#### `timer.clear()` -> `boolean`
Stop the timer. Returns true if the timer is running. otherwise, return false.
```js
// clear (stop) the timer
timer.clear();
```

---

## isRunning
#### `timer.isRunning()` -> `boolean`
Returns true is the timer is running. otherwise, return false.
```js
// Get the time isRunning
timer.isRunning();
```

---

## trigger
#### `timer.trigger(...params)` -> `void`
```js
// trigger the timeoutEvent
timer.trigger('Hello nodejs-timer from trigger');
```
##### ...params
*Optional*  
Type: `T extends any[]`   
Desc: Parameters pass to timeoutEvent