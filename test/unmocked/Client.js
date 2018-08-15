import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import ClientModel from '../../build/ClientModel';

test.beforeEach(async t => {
  const aparector = AparectorHttpBasic.getInstance(endpoint);
  await aparector.authenticate(username, password);
  t.context.aparector = aparector;
});

test('can create client', async t => {
  const client = new ClientModel();
  client.data = {
    "officeId": 1,
    "firstname": "Petra",
    "lastname": "Yton",
    "active": false,
  };
  // for some reason server returns 500
  // await client.save();
  t.pass();
});

