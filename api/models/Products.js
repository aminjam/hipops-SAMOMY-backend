/**
 * @class
 * @description :: Products is a (your description here!)
 * @property {string}  propname                - prop description
 */
function model() {
  'use strict';

  /*jshint validthis:true */
  var _self = this;
  _self.tableName = 'Product';
  _self.connection = 'mongo';

  //noinspection JSUnusedGlobalSymbols
  _self.attributes = {
    name: {
      type: 'string',
      required: true
    },
    userId: {
      type: 'string',
      required: true
    },
    price: {
      type: 'float'
    }
  };

}

//noinspection JSValidateTypes
module.exports = new model();
