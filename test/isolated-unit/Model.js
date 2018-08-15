import test from 'ava';
import Model from '../../build/Model';

class SimpleModel extends Model {
  constructor() {
    super();
    this.type = 'simple';
    this.requiredFields = ['officeId'];
  }
}

test('model basic validation correctly checks required fields', async t => {
  const simple = new SimpleModel();
  simple.set('officeId', 1);
  t.true(simple.isValid());
});

test('model basic validation detects missing fields', async t => {
  const simple = new SimpleModel();
  simple.set('office', 1);
  t.false(simple.isValid());
});