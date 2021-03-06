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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1NodeSpec', 'io.kubernetes.js/io.kubernetes.js.models/V1NodeStatus', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1NodeSpec'), require('./V1NodeStatus'), require('./V1ObjectMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1Node = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1NodeSpec, root.KubernetesJsClient.V1NodeStatus, root.KubernetesJsClient.V1ObjectMeta);
  }
}(this, function(ApiClient, V1NodeSpec, V1NodeStatus, V1ObjectMeta) {
  'use strict';




  /**
   * The V1Node model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1Node
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1Node</code>.
   * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1Node
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V1Node</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1Node} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1Node} The populated <code>V1Node</code> instance.
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
      if (data.hasOwnProperty('spec')) {
        obj['spec'] = V1NodeSpec.constructFromObject(data['spec']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = V1NodeStatus.constructFromObject(data['status']);
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
   * Standard object's metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Spec defines the behavior of a node. http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1NodeSpec} spec
   */
  exports.prototype['spec'] = undefined;
  /**
   * Most recently observed status of the node. Populated by the system. Read-only. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1NodeStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


