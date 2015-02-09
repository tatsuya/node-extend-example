var _ = require('underscore');
var util = require('util');

var myUtil = _.extend({}, util);

myUtil.isNumeric = function(val) {
  return typeof val !== 'object' && val - parseFloat(val) >= 0;
};

module.exports = myUtil;