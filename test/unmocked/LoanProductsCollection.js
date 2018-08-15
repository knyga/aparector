import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import LoanProductsCollection from '../../build/models/loanproduct/LoanProductsCollection';

// TODO migrate to mock server
const aparector = AparectorHttpBasic.getInstance(endpoint);
test.before(async t => {
  await aparector.authenticate(username, password);
});

test('can read loan products', async t => {
  const loanProducts = new LoanProductsCollection();
  const totalFilteredItemsCount = await loanProducts.read();
  console.log(totalFilteredItemsCount);
  for(let i = 0; i < loanProducts.items.length; i++) {
    t.true(loanProducts.items[i].hasOwnProperty('name'));
  }
});
