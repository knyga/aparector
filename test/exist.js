import test from 'ava';
import {Greeter} from '../build';

test('foo', t => {
  t.is(Greeter('me'), 'Hello there Oleks, me!');
});