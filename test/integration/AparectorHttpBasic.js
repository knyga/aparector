import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';

test('basic authentication works with correct credentials', async t => {
  const aparector = AparectorHttpBasic.getInstance(endpoint);
  await aparector.authenticate(username, password);
  t.is(aparector.info.userId, 1);
});

test('basic authentication throws exception if credentials are wrong', async t => {
  const aparector = AparectorHttpBasic.getInstance(endpoint);
  try {
    await aparector.authenticate('dasdasdas', 'asfds08dgysaciuho');
    t.fail();
  } catch(e) {
    t.pass();
  }
});

test('basic authentication throws exception if endpoint doenst respond', async t => {
  const aparector = AparectorHttpBasic.getInstance('http://any.com');
  try {
    await aparector.authenticate(username, password);
    t.fail();
  } catch(e) {
    t.pass();
  }
});