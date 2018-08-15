import test from 'ava';
import {endpoint, username, password} from '../config';
import {AuthenticationHttpBasic} from '../../build/AuthenticationHttpBasic';

test('basic authentication works with correct credentials', async t => {
  const authenicator = new AuthenticationHttpBasic(endpoint);
  await authenicator.authenticate(username, password);
  t.is(authenicator.info.userId, 1);
});

test('basic authentication throws exception if credentials are wrong', async t => {
  const authenicator = new AuthenticationHttpBasic(endpoint);
  try {
    await authenicator.authenticate('dasdasdas', 'asfds08dgysaciuho');
    t.fail();
  } catch(e) {
    t.pass();
  }
});

test('basic authentication throws exception if endpoint doenst respond', async t => {
  const authenicator = new AuthenticationHttpBasic('http://any.com');
  try {
    await authenicator.authenticate(username, password);
    t.fail();
  } catch(e) {
    t.pass();
  }
});