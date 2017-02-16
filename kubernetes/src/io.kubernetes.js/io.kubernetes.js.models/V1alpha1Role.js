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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta', 'io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ObjectMeta'), require('./V1alpha1PolicyRule'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1alpha1Role = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ObjectMeta, root.KubernetesJsClient.V1alpha1PolicyRule);
  }
}(this, function(ApiClient, V1ObjectMeta, V1alpha1PolicyRule) {
  'use strict';




  /**
   * The V1alpha1Role model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1alpha1Role
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1alpha1Role</code>.
   * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1Role
   * @class
   * @param rules {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule>} Rules holds all the PolicyRules for this Role
   */
  var exports = function(rules) {
    var _this = this;




    _this['rules'] = rules;
  };

  /**
   * Constructs a <code>V1alpha1Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1Role} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1Role} The populated <code>V1alpha1Role</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [V1alpha1PolicyRule]);
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
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Standard object's metadata.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Rules holds all the PolicyRules for this Role
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1PolicyRule>} rules
   */
  exports.prototype['rules'] = undefined;



  return exports;
}));


