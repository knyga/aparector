import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import LoansCollection from '../../build/models/loan/LoansCollection';

// TODO migrate to mock server
const aparector = AparectorHttpBasic.getInstance(endpoint);
test.before(async t => {
  await aparector.authenticate(username, password);
});

test('can read loans', async t => {
  const loans = new LoansCollection();
  const options = {limit: 10};
  t.is(loans.items.length, 0);
  const totalFilteredItemsCount = await loans.read(options);
  t.is(loans.items.length, 10);
  t.true(totalFilteredItemsCount > 1);
  for(let i = 0; i < loans.items.length; i++) {
    t.true(loans.items[i].hasOwnProperty('accountNo'));
  }
});
