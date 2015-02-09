var util = require('util');

var myUtil = util._extend({}, util);

myUtil.isNumeric = function(val) {
  return typeof val !== 'object' && val - parseFloat(val) >= 0;
};

module.exports = myUtil;