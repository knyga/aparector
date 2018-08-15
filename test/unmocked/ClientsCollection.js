import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import ClientsCollection from '../../build/models/client/ClientsCollection';

test.beforeEach(async t => {
  const aparector = AparectorHttpBasic.getInstance(endpoint);
  await aparector.authenticate(username, password);
  t.context.aparector = aparector;
});

test('can read clients', async t => {
  const clients = new ClientsCollection();
  const options = {limit: 10};
  t.is(clients.items.length, 0);
  const totalFilteredItemsCount = await clients.read(options);
  t.is(clients.items.length, 10);
  t.true(totalFilteredItemsCount > 1);
  for(let i = 0; i < clients.items.length; i++) {
    t.true(clients.items[i].hasOwnProperty('accountNo'));
  }
});
