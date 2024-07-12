'use strict';

var utils = require('../utils/writer.js');
var PaymentsMs = require('../service/PaymentsMsService');

module.exports.payments = function payments (req, res, next, body) {
  PaymentsMs.payments(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.trasaction = function trasaction (req, res, next, body) {
  PaymentsMs.trasaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.trasactionCount = function trasactionCount (req, res, next, body) {
  PaymentsMs.trasactionCount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
