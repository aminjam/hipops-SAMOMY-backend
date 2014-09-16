/**
 * @class
 * @description :: Products is a (your description here!)
 * @property {string}  propname                - prop description
 */
function model() {
  'use strict';

  /*jshint validthis:true */
  var _self = this;
  _self.tableName = 'User';
  _self.connection = 'mysql';

  //noinspection JSUnusedGlobalSymbols
  _self.attributes = {
    name: {
      type: 'string',
      required: true
    },
    age: {
      type: 'integer',
      required: true
    }
  };

}

//noinspection JSValidateTypes
module.exports = new model();
