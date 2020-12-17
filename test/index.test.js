const { Timer } = require('../dist/index.js');
const { expect } = require('chai');
const wait = (ms) => (new Promise((resolve) => { setTimeout(() => { resolve(); }, ms); }));

describe('Timer test', function () {
  it('start test', function () {
    const timer = new Timer(() => {});
    expect(timer.start(3000)).to.equal(true);
    expect(timer.start(3000)).to.equal(false);
    timer.clear();
  });

  it('clear test', function () {
    const timer = new Timer(() => {});
    expect(timer.clear()).to.equal(false);
    timer.start(3000);
    expect(timer.clear()).to.equal(true);
    expect(timer.clear()).to.equal(false);
  });

  it('isRunning test', function () {
    const timer = new Timer(() => {});
    expect(timer.isRunning()).to.equal(false);
    timer.start(3000);
    expect(timer.isRunning()).to.equal(true);
    timer.clear();
    expect(timer.isRunning()).to.equal(false);
  });

  it('trigger test', function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.trigger();
    expect(count).to.equal(1);
    timer.trigger(2);
    expect(count).to.equal(3);
    timer.trigger(3);
    expect(count).to.equal(6);
  });

  it('trigger test', function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.trigger();
    expect(count).to.equal(1);
    timer.trigger(2);
    expect(count).to.equal(3);
    timer.trigger(3);
    expect(count).to.equal(6);
  });

  it('start & trigger test', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000);
    await wait(500);
    expect(count).to.equal(0);
    await wait(1000);
    expect(count).to.equal(1);
    timer.start(1000, 3);
    await wait(500);
    expect(count).to.equal(1);
    await wait(1000);
    expect(count).to.equal(4);
  });

  it('start & stop test', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000);
    await wait(500);
    expect(count).to.equal(0);
    timer.clear();
    await wait(1000);
    expect(count).to.equal(0);
    timer.start(1000, 3);
    await wait(500);
    expect(count).to.equal(0);
    timer.clear();
    await wait(1000);
    expect(count).to.equal(0);
  });

  it('start & stop test', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000);
    await wait(500);
    expect(count).to.equal(0);
    timer.clear();
    await wait(1000);
    expect(count).to.equal(0);
    timer.start(1000, 3);
    await wait(500);
    expect(count).to.equal(0);
    timer.clear();
    await wait(1000);
    expect(count).to.equal(0);
  });

  it('start & stop & trigger test', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000);
    await wait(500);
    if (timer.clear()) {
      timer.trigger(2);
    }
    await wait(1000);
    expect(count).to.equal(2);
  });

  it('start & stop & trigger test 2', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000);
    await wait(1500);
    if (timer.clear()) {
      timer.trigger(2);
    }
    await wait(500);
    expect(count).to.equal(1);
  });

  it('start test', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000, 1);
    await wait(100);
    timer.start(1000, 2);
    await wait(100);
    timer.start(1000, 3);
    await wait(1500);
    expect(count).to.equal(1);
  });

  it('clear test', async function () {
    let count = 0;
    const timer = new Timer((num = 1) => { count += num; });
    timer.start(1000, 1);
    await wait(100);
    timer.clear();
    await wait(1500);
    expect(count).to.equal(0);
  });
});