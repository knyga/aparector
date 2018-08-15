Aparector

Current module wraps Apache Fineract in ORM-like style. Authorization implemented via HTTP Basic.
Endpoints covered: clients, loans, loanproducts.

How to setup

`npm install aparector#master --save`

How to work with

For example if you have need to read first 10 clients from the API you might need to do something similar to:
```
// Your specific endpoint for api, username and password
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from 'knyga/aparector/build/AparectorHttpBasic';
import ClientsCollection from 'knyga/aparector/build/models/client/ClientsCollection';
const clients = new ClientsCollection();
const options = {limit: 10};
await clients.read(options);
// to access clients use clients.items
}
```