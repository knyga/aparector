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
    "externalId": "786YYH7",
    "dateFormat": "dd MMMM yyyy",
    "locale": "en",
    "active": true,
    "activationDate": "04 March 2009",
    "submittedOnDate":"04 March 2009",
    "savingsProductId" : 4,
    "datatables": [{
      "registeredTableName": "Family Details",
      "data": {
        "locale": "en",
        "Number of members": "5",
        "Number of dependents": "3",
        "No of Children": "2",
        "Date of verification": "14 December 2016",
        "dateFormat": "dd MMMM yyyy"
      }
    },
      {
        "registeredTableName": "Residency Address",
        "data": {
          "locale": "en",
          "Address Line": "Basavana Gudi Road",
          "Street": "Gandhi Bazaar",
          "Landmark": "Aashrama",
          "COUNTRY_cd_Country": 17,
          "STATE_cd_State": "7",
          "DISTRICT_cd_District": "13",
          "Pincode": "560040"
        }
      }]
  };

  // {
  //   "status": 403,
  //   "json": {
  //   "developerMessage": "The request caused a data integrity issue to be fired by the database.",
  //     "httpStatusCode": "403",
  //     "defaultUserMessage": "Client with externalId `786YYH7` already exists",
  //     "userMessageGlobalisationCode": "error.msg.client.duplicate.externalId",
  //     "errors": [{
  //     "developerMessage": "Client with externalId `786YYH7` already exists",
  //     "defaultUserMessage": "Client with externalId `786YYH7` already exists",
  //     "userMessageGlobalisationCode": "error.msg.client.duplicate.externalId",
  //     "parameterName": "externalId",
  //     "value": null,
  //     "args": [{
  //       "value": "786YYH7"
  //     }]
  //   }]
  // }
  // }
  // at the same time with other data sets I was getting 500 error..
  try {
    await client.save();
    t.pass();
  } catch(e) {
    t.is(JSON.parse(e.message).status, 403);
  }
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
