import test from 'ava';
import {endpoint, username, password} from '../config';
import ClientModel from '../../build/ClientModel';

test.only('can create client', async t => {
  const client = new ClientModel();
  client.fill({
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
  });
  t.pass();
});