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
    root.KubernetesJsClient.IntstrIntOrString = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IntstrIntOrString model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/IntstrIntOrString
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>IntstrIntOrString</code>.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/IntstrIntOrString
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>IntstrIntOrString</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/IntstrIntOrString} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/IntstrIntOrString} The populated <code>IntstrIntOrString</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


