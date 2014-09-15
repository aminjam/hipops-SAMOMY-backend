
/**
* @class
* @description :: Levels is a (your description here!)
* @property {string}  propname                - prop description
*/
function Levels() {
    'use strict';

    /*jshint validthis:true */
    var _self = this;
    _self.connection = 'mysql';

    //noinspection JSUnusedGlobalSymbols
               _self.attributes = {
                 name:{
                   type:'string',
                   required:true
                 }
               };

               var whitelist = [];
               var blacklist = [];

    _self.applyWhitelist = function (data) {
        //noinspection JSUnresolvedVariable,JSUnresolvedFunction
        return sails.services.applywhitelist(data, whitelist);
    };

    _self.applyBlacklist = function (data) {
        //noinspection JSUnresolvedVariable,JSUnresolvedFunction
        return sails.services.applyblacklist(data, blacklist);
    };

    //noinspection JSUnusedLocalSymbols
               function passItOn(result) {
                              return result;
               }

               //noinspection JSUnusedLocalSymbols
               function logErrorAndThrow(methodName, errorCode, friendlyMsg, origError) {
                              log.error("Error Occurred In " + methodName + " :: " + JSON.stringify(origError));
                              throw {
                                             errorCode: errorCode,
                                             msg: friendlyMsg
                              };
               }
}

//noinspection JSValidateTypes
module.exports = new Levels() ;
