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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1DeleteOptions'), require('./V1ObjectMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1Eviction = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1DeleteOptions, root.KubernetesJsClient.V1ObjectMeta);
  }
}(this, function(ApiClient, V1DeleteOptions, V1ObjectMeta) {
  'use strict';




  /**
   * The V1beta1Eviction model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1Eviction
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1Eviction</code>.
   * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/&lt;pod name&gt;/evictions.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1Eviction
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>V1beta1Eviction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1Eviction} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1Eviction} The populated <code>V1beta1Eviction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('deleteOptions')) {
        obj['deleteOptions'] = V1DeleteOptions.constructFromObject(data['deleteOptions']);
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * DeleteOptions may be provided
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions} deleteOptions
   */
  exports.prototype['deleteOptions'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * ObjectMeta describes the pod that is being evicted.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


