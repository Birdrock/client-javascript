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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/UnversionedStatusCause'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedStatusCause'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.UnversionedStatusDetails = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.UnversionedStatusCause);
  }
}(this, function(ApiClient, UnversionedStatusCause) {
  'use strict';




  /**
   * The UnversionedStatusDetails model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/UnversionedStatusDetails
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>UnversionedStatusDetails</code>.
   * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/UnversionedStatusDetails
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UnversionedStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedStatusDetails} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedStatusDetails} The populated <code>UnversionedStatusDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('causes')) {
        obj['causes'] = ApiClient.convertToType(data['causes'], [UnversionedStatusCause]);
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('retryAfterSeconds')) {
        obj['retryAfterSeconds'] = ApiClient.convertToType(data['retryAfterSeconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/UnversionedStatusCause>} causes
   */
  exports.prototype['causes'] = undefined;
  /**
   * The group attribute of the resource associated with the status StatusReason.
   * @member {String} group
   */
  exports.prototype['group'] = undefined;
  /**
   * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * If specified, the time in seconds before the operation should be retried.
   * @member {Number} retryAfterSeconds
   */
  exports.prototype['retryAfterSeconds'] = undefined;



  return exports;
}));


