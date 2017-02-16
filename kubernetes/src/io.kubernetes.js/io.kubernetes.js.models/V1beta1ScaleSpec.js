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
    root.KubernetesJsClient.V1beta1ScaleSpec = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1beta1ScaleSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1ScaleSpec
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1ScaleSpec</code>.
   * describes the attributes of a scale subresource
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1ScaleSpec
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V1beta1ScaleSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1ScaleSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1ScaleSpec} The populated <code>V1beta1ScaleSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('replicas')) {
        obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
      }
    }
    return obj;
  }

  /**
   * desired number of instances for the scaled object.
   * @member {Number} replicas
   */
  exports.prototype['replicas'] = undefined;



  return exports;
}));


