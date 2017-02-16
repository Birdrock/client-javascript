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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/UnversionedTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedTime'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1JobCondition = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.UnversionedTime);
  }
}(this, function(ApiClient, UnversionedTime) {
  'use strict';




  /**
   * The V1JobCondition model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1JobCondition
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1JobCondition</code>.
   * JobCondition describes current state of a job.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1JobCondition
   * @class
   * @param status {String} Status of the condition, one of True, False, Unknown.
   * @param type {String} Type of job condition, Complete or Failed.
   */
  var exports = function(status, type) {
    var _this = this;





    _this['status'] = status;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>V1JobCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1JobCondition} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1JobCondition} The populated <code>V1JobCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastProbeTime')) {
        obj['lastProbeTime'] = UnversionedTime.constructFromObject(data['lastProbeTime']);
      }
      if (data.hasOwnProperty('lastTransitionTime')) {
        obj['lastTransitionTime'] = UnversionedTime.constructFromObject(data['lastTransitionTime']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Last time the condition was checked.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedTime} lastProbeTime
   */
  exports.prototype['lastProbeTime'] = undefined;
  /**
   * Last time the condition transit from one status to another.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedTime} lastTransitionTime
   */
  exports.prototype['lastTransitionTime'] = undefined;
  /**
   * Human readable message indicating details about last transition.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * (brief) reason for the condition's last transition.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Status of the condition, one of True, False, Unknown.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Type of job condition, Complete or Failed.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


