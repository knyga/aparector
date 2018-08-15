import test from 'ava';
import {endpoint, username, password} from '../config';
import AparectorHttpBasic from '../../build/AparectorHttpBasic';
import LoanProductModel from '../../build/models/loanproduct/LoanProductModel';

// TODO migrate to mock server
const aparector = AparectorHttpBasic.getInstance(endpoint);
test.before(async t => {
  await aparector.authenticate(username, password);
});

test('can create loan product', async t => {
  const loanProduct = new LoanProductModel();
  loanProduct.data = {
    "name": "personal loan product",
    "shortName": "pe1",
    "includeInBorrowerCycle": false,
    "useBorrowerCycle": false,
    "startDate": [
      2013,
      9,
      2
    ],
    "closeDate": [
      2014,
      2,
      7
    ],
    "status": "loanProduct.active",
    "currency": {
      "code": "USD",
      "name": "US Dollar",
      "decimalPlaces": 2,
      "inMultiplesOf": 0,
      "displaySymbol": "$",
      "nameCode": "currency.USD",
      "displayLabel": "US Dollar ($)"
    },
    "principal": 10000.000000,
    "minPrincipal": 5000.000000,
    "maxPrincipal": 15000.000000,
    "numberOfRepayments": 10,
    "minNumberOfRepayments": 5,
    "maxNumberOfRepayments": 15,
    "repaymentEvery": 7,
    "repaymentFrequencyType": {
      "id": 0,
      "code": "repaymentFrequency.periodFrequencyType.days",
      "value": "Days"
    },
    "interestRatePerPeriod": 15.000000,
    "interestRateFrequencyType": {
      "id": 3,
      "code": "interestRateFrequency.periodFrequencyType.years",
      "value": "Per year"
    },
    "annualInterestRate": 15.000000,
    "amortizationType": {
      "id": 1,
      "code": "amortizationType.equal.installments",
      "value": "Equal installments"
    },
    "interestType": {
      "id": 1,
      "code": "interestType.flat",
      "value": "Flat"
    },
    "interestCalculationPeriodType": {
      "id": 1,
      "code": "interestCalculationPeriodType.same.as.repayment.period",
      "value": "Same as repayment period"
    },
    "transactionProcessingStrategyId": 1,
    "transactionProcessingStrategyName": "Mifos style",
    "principalVariationsForBorrowerCycle": [],
    "interestRateVariationsForBorrowerCycle": [],
    "numberOfRepaymentVariationsForBorrowerCycle": [],
    "daysInMonthType": {
      "id": 30,
      "code": "DaysInMonthType.days360",
      "value": "30 Days"
    },
    "daysInYearType": {
      "id": 360,
      "code": "DaysInYearType.days360",
      "value": "360 Days"
    },
    "isInterestRecalculationEnabled": true,
    "interestRecalculationData": {
      "id": 3,
      "productId": 1,
      "interestRecalculationCompoundingType": {
        "id": 2,
        "code": "interestRecalculationCompoundingMethod.fee",
        "value": "Fee"
      },
      "recalculationCompoundingFrequencyType": {
        "id":1,
        "code":"interestRecalculationFrequencyType.same.as.repayment.period",
        "value":"Same as repayment period"
      },
      "rescheduleStrategyType": {
        "id": 2,
        "code": "loanRescheduleStrategyMethod.reduce.number.of.installments",
        "value": "Reduce number of installments"
      },
      "recalculationRestFrequencyType": {
        "id":1,
        "code":"interestRecalculationFrequencyType.same.as.repayment.period",
        "value":"Same as repayment period"
      },
      "preClosureInterestCalculationStrategy": {
        "id":1,
        "code":"loanPreClosureInterestCalculationStrategy.tillPreClosureDate",
        "value":"Till preclose Date"
      },
      "isArrearsBasedOnOriginalSchedule" : true
    },
    "accountingRule": {
      "id": 2,
      "code": "accountingRuleType.cash",
      "value": "CASH BASED"
    },
    "principalThresholdForLastInstalment":0
  };

//   "status": 400, "json": {
//     "developerMessage": "The request was invalid. This typically will happen due to validation errors
// which are provided.",
//       "httpStatusCode": "400",
//       "defaultUserMessage": "Validation errors exist.",
//       "userMessageGlobalisationCode": "validation.msg.validation.errors.exist",
//       "errors": [{
//       "developerMessage": "The parameter status is not supported.",
//       "defaultUserMessage": "The parameter status is not supported.",
//       "userMessageGlobalisationCode": "error.msg.parameter.unsupported",
//       "parameterName": "status",
//       "value": null,
//       "args": [{
//         "value": "status"
//       }]
//     }, {
//       "developerMessage": "The parameter currency is not supported.",
//       "defaultUserMessage": "The parameter currency is not supported.",
//       "userMessageGlobalisationCode": "error.msg.parameter.unsupported",
//       "parameterName": "currency",
//       "value": null,
//       "args": [{
//         "value": "currency"
//       }]
//     }, {
//       "developerMessage": "The parameter annualInterestRate is not supported.",
//       "defaultUserMessage": "The parameter annualInterestRate is not supported.",
//       "userMessageGlobalisationCode": "error.msg.parameter.unsupported",
//       "parameterName": "annualInterestRate",
//       "value": null,
//       "args": [{
//         "value": "annualInterestRate"
//       }]
//     }, {
//       "developerMessage": "The parameter transactionProcessingStrategyName is not supported.",
//       "defaultUserMessage": "The parameter transactionProcessingStrategyName is not supported.",
//       "userMessageGlobalisationCode": "error.msg.parameter.unsupported",
//       "parameterName": "transactionProcessingStrategyName",
//       "value": null,
//       "args": [{
//         "value": "transactionProcessingStrategyName"
//       }]
//     }, {
//       "developerMessage": "The parameter interestRecalculationData is not supported.",
//       "defaultUserMessage": "The parameter interestRecalculationData is not supported.",
//       "userMessageGlobalisationCode": "error.msg.parameter.unsupported",
//       "parameterName": "interestRecalculationData",
//       "value": null,
//       "args": [{
//         "value": "interestRecalculationData"
//       }]
//     }, {
//       "developerMessage": "The parameter principalThresholdForLastInstalment is not supported.",
//       "defaultUserMessage": "The parameter principalThresholdForLastInstalment is not supported.",
//       "userMessageGlobalisationCode": "error.msg.parameter.unsupported",
//       "parameterName": "principalThresholdForLastInstalment",
//       "value": null,
//       "args": [{
//         "value": "principalThresholdForLastInstalment"
//       }]
//     }]
//   }
// }
  try {
    await loanProduct.save();
    t.pass();
  } catch(e) {
    t.is(JSON.parse(e.message).status, 400);
  }
});

test('can read loan product', async t => {
  const loanProduct = new LoanProductModel(1);
  await loanProduct.read();
  t.is(loanProduct.get('name'), 'Income Generating Loan');
  t.is(loanProduct.get('shortName'), 'IGL');
});

test('can read client with options', async t => {
  const loanProduct = new LoanProductModel(1);
  await loanProduct.read({fields: ['name']});
  t.is(loanProduct.get('name'), 'Income Generating Loan');
  t.is(loanProduct.get('shortName'), undefined);
});
