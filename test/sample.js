'use strict';

const test = require('ava');

test('sample', t => {
  t.plan(1);

  return Promise.resolve(3).then(n => {
    t.is(n, 3);
  });
});
