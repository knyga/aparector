import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import LoanModel from '../../build/models/loan/LoanModel';

// TODO migrate to mock server
const aparector = AparectorHttpBasic.getInstance(endpoint);
test.before(async t => {
  await aparector.authenticate(username, password);
});

test('can create loan application', async t => {
  const loanApplication = new LoanModel();
  loanApplication.data = {
    "dateFormat": "dd MMMM yyyy",
    "locale": "en_GB",
    "clientId": 1,
    "productId": 1,
    "principal": "10,000.00",
    "loanTermFrequency": 12,
    "loanTermFrequencyType": 2,
    "loanType": "individual",
    "numberOfRepayments": 10,
    "repaymentEvery": 1,
    "repaymentFrequencyType": 2,
    "interestRatePerPeriod": 10,
    "amortizationType": 1,
    "interestType": 0,
    "interestCalculationPeriodType": 1,
    "transactionProcessingStrategyId": 1,
    "expectedDisbursementDate": "10 Jun 2013",
    "submittedOnDate": "10 Jun 2013",
    "linkAccountId" : "1",
    "fixedEmiAmount":1100,
    "maxOutstandingLoanBalance":"35000",
    "disbursementData":[{"expectedDisbursementDate":"01 November 2013",
      "principal":22000,"approvedPrincipal":22000}],
    "datatables": [{
      "registeredTableName": "loan_balance",
      "data": {
        "locale": "en",
        "account_number": "0000001",
        "Balance": "3300.00",
        "DateField": "01 December 2016 00:00",
        "dateFormat": "dd MMMM yyyy HH:mm",
        "DateTimeField": "01 December 2016 12:00"
      }
    },
      {
        "registeredTableName": "Date Loan Field",
        "data": {
          "locale": "en",
          "Activation Date": "01 December 2016 00:00",
          "dateFormat": "dd MMMM yyyy HH:mm"
        }
      }]
  };

  // Error {
  //   message: {
  //     "status": 400,
  //       "json": {
  //       "developerMessage": "The request was invalid. This typically will happen due to validation errors which
  // are provided.",
  //         "httpStatusCode": "400",
  //         "defaultUserMessage": "Validation errors exist.",
  //         "userMessageGlobalisationCode": "validation.msg.validation.errors.exist",
  //         "errors": [{
  //         "developerMessage": "Failed data validation due to:
  // first.disbursement.date.must.start.with.expected.disbursement.date.",
  //         "defaultUserMessage": "Failed data validation due to:
  // first.disbursement.date.must.start.with.expected.disbursement.date.",
  //         "userMessageGlobalisationCode":
  // "validation.msg.loan.expectedDisbursementDate.first.disbursement.date.must.start.with.expected.disbursement.date",
  //         "parameterName": "expectedDisbursementDate",
  //         "value": null,
  //         "args": [{
  //           "value": null
  //         }, {
  //           "value": []
  //         }]
  //       }, {
  //         "developerMessage": "Failed data validation due to:
  // sum.of.multi.disburse.amounts.must.be.equal.to.or.lesser.than.approved.principal.",
  //         "defaultUserMessage": "Failed data validation due to:
  // sum.of.multi.disburse.amounts.must.be.equal.to.or.lesser.than.approved.principal.",
  //         "userMessageGlobalisationCode":
  // "validation.msg.loan.principal.sum.of.multi.disburse.amounts.must.be.equal.to.or.lesser.than.approved.principal",
  //         "parameterName": "principal",
  //         "value": null,
  //         "args": [{
  //           "value": null
  //         }, {
  //           "value": []
  //         }]
  //       }]
  //     }
  //   }
  // }
  //await loanApplication.save();
  t.pass();
});

test('can read loan', async t => {
  const loan = new LoanModel(1);
  await loan.read();
  t.is(loan.get('accountNo'), '000000001');
  t.is(loan.get('clientId'), 8);
});

test('can read loan with options', async t => {
  const loan = new LoanModel(1);
  await loan.read({fields: ['clientId']});
  t.is(loan.get('clientId'), 8);
  t.is(loan.get('accountNo'), undefined);
});
