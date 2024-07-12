'use strict';


/**
 * payments Data
 *
 * body Payments_body request body (optional)
 * returns inline_response_200
 **/
exports.payments = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    switch (true) {
      case body.merchant_mobile === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field merchant_mobile'
        };
        resolve(examples['application/json']);
        break;
      case body.payee_vpa === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field payee_vpa'
        };
        resolve(examples['application/json']);
        break;
      case body.datetime === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field datetime'
        };
        resolve(examples['application/json']);
        break;
      case body.amount === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field amount'
        };
        resolve(examples['application/json']);
        break;
      case body.payer_vpa === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field payer_vpa'
        };
        resolve(examples['application/json']);
        break;
      case body.payer_name === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field payer_name'
        };
        resolve(examples['application/json']);
        break;
      case body.merchant_mobile !== '9731037150':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid merchant_mobile'
        };
        resolve(examples['application/json']);
        break;
      case body.payee_vpa !== '34892edjkncx':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid payee_vpa'
        };
        resolve(examples['application/json']);
        break;
      case body.datetime !== '12/10/2020':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid datetime'
        };
        resolve(examples['application/json']);
        break;
      case body.amount !== 3848492:
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid amount'
        };
        resolve(examples['application/json']);
        break;
      case body.payer_vpa !== '6437890':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid payer_vpa'
        };
        resolve(examples['application/json']);
        break;
      case body.payer_name !== 'abc':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid payer_name'
        };
        resolve(examples['application/json']);
        break;
      default:
        examples['application/json'] = {
          code: 2000,
          message: 'successfully received'
        };
        resolve(examples['application/json']);
        break;
    }
  });
};


/**
 * payments Data
 *
 * body Payments_get_body request body (optional)
 * returns transactionRes
 **/
exports.trasaction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

  
    switch (true) {
      case body.uuid === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field uuid'
        };
        break;
      case body.uuid !== "12":
          examples['application/json'] = {
            "code": 1000,
            "message": "no record found"
        };
        break;  
      case body.date === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field date'
        };
        break;
      case body.date !== '10/12/2020':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid date'
        };
        break;
      default:
        examples['application/json'] = {
          code: 2000,
          data: {
            current_date: '10/12/2020',
            payments: "[{\"id\":1,\"details\":{\"payer_name\":\"abc\",\"payer_id\":\"w4r085\",\"transaction_time\":\"10/10/2020\",\"amount\":23423}},{\"id\":2,\"details\":{\"payer_name\":\"amkf\",\"payer_id\":\"sjfdksdf3\",\"transaction_time\":\"29/2/2024\",\"amount\":2343232}}]"
          }
        };
        break;
    }

    resolve(examples['application/json']);
  });
};


/**
 * payment count
 *
 * body Summary_get_body current date (optional)
 * returns countRes
 **/
exports.trasactionCount = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    // Hardcoded response based on different cases
    switch (true) {
      case body.uuid === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field uuid'
        };
        break;
      case body.uuid !== "12":
          examples['application/json'] = {
            "code": 1000,
            "message": "no record found"
        };
        break; 
      case body.date === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field date'
        };
        break;
        case body.date === "":
          examples['application/json'] = {
            code: 1000,
            message: 'please enter the date'
          };
          break;
      case body.date !== '10/2/2022':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter the valid date'
        };
        break;
      default:
        examples['application/json'] = {
          code: 2000,
          data: {
            amount: 934,
            current_date: '10/2/2022',
            count: 34
          }
        };
        break;
    }

    resolve(examples['application/json']);
  });
};
