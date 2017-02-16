/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.5.1-660c2a2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/UnversionedTime', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedTime'), require('./V1ObjectReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V2alpha1CronJobStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.UnversionedTime, root.KubernetesJsClient.V1ObjectReference);
  }
}(this, function(ApiClient, UnversionedTime, V1ObjectReference) {
  'use strict';




  /**
   * The V2alpha1CronJobStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V2alpha1CronJobStatus
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V2alpha1CronJobStatus</code>.
   * CronJobStatus represents the current state of a cron job.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1CronJobStatus
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V2alpha1CronJobStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1CronJobStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1CronJobStatus} The populated <code>V2alpha1CronJobStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], [V1ObjectReference]);
      }
      if (data.hasOwnProperty('lastScheduleTime')) {
        obj['lastScheduleTime'] = UnversionedTime.constructFromObject(data['lastScheduleTime']);
      }
    }
    return obj;
  }

  /**
   * Active holds pointers to currently running jobs.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectReference>} active
   */
  exports.prototype['active'] = undefined;
  /**
   * LastScheduleTime keeps information of when was the last time the job was successfully scheduled.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedTime} lastScheduleTime
   */
  exports.prototype['lastScheduleTime'] = undefined;



  return exports;
}));


