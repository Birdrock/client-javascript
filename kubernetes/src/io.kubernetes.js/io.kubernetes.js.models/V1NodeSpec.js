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
    root.KubernetesJsClient.V1NodeSpec = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1NodeSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1NodeSpec
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1NodeSpec</code>.
   * NodeSpec describes the attributes that a node is created with.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1NodeSpec
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>V1NodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1NodeSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1NodeSpec} The populated <code>V1NodeSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('externalID')) {
        obj['externalID'] = ApiClient.convertToType(data['externalID'], 'String');
      }
      if (data.hasOwnProperty('podCIDR')) {
        obj['podCIDR'] = ApiClient.convertToType(data['podCIDR'], 'String');
      }
      if (data.hasOwnProperty('providerID')) {
        obj['providerID'] = ApiClient.convertToType(data['providerID'], 'String');
      }
      if (data.hasOwnProperty('unschedulable')) {
        obj['unschedulable'] = ApiClient.convertToType(data['unschedulable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * External ID of the node assigned by some machine database (e.g. a cloud provider). Deprecated.
   * @member {String} externalID
   */
  exports.prototype['externalID'] = undefined;
  /**
   * PodCIDR represents the pod IP range assigned to the node.
   * @member {String} podCIDR
   */
  exports.prototype['podCIDR'] = undefined;
  /**
   * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
   * @member {String} providerID
   */
  exports.prototype['providerID'] = undefined;
  /**
   * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: http://releases.k8s.io/HEAD/docs/admin/node.md#manual-node-administration\"
   * @member {Boolean} unschedulable
   */
  exports.prototype['unschedulable'] = undefined;



  return exports;
}));


