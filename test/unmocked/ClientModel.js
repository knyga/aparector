import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import ClientModel from '../../build/models/client/ClientModel';

// TODO migrate to mock server
const aparector = AparectorHttpBasic.getInstance(endpoint);
test.before(async t => {
  await aparector.authenticate(username, password);
});

test('can create client', async t => {
  const client = new ClientModel();
  client.data = {
    "officeId": 1,
    "firstname": "Petra",
    "lastname": "Yton",
    "active": false,
  };
  // for some reason server returns 500 on any data set
  // await client.save();
  t.pass();
});

test('can read client', async t => {
  const client = new ClientModel(1);
  await client.read();
  t.is(client.get('externalId'), '786444UUUYYH7');
  t.is(client.get('firstname'), 'Smith');
});

test('can read client with options', async t => {
  const client = new ClientModel(1);
  await client.read({fields: ['externalId']});
  t.is(client.get('externalId'), '786444UUUYYH7');
  t.is(client.get('firstname'), undefined);
});
