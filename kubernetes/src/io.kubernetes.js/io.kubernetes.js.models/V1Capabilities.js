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
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1Capabilities = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1Capabilities model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1Capabilities
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1Capabilities</code>.
   * Adds and removes POSIX capabilities from running containers.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1Capabilities
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1Capabilities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1Capabilities} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1Capabilities} The populated <code>V1Capabilities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('add')) {
        obj['add'] = ApiClient.convertToType(data['add'], ['String']);
      }
      if (data.hasOwnProperty('drop')) {
        obj['drop'] = ApiClient.convertToType(data['drop'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Added capabilities
   * @member {Array.<String>} add
   */
  exports.prototype['add'] = undefined;
  /**
   * Removed capabilities
   * @member {Array.<String>} drop
   */
  exports.prototype['drop'] = undefined;



  return exports;
}));


