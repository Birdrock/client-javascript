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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1LoadBalancerIngress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LoadBalancerIngress'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1LoadBalancerStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1LoadBalancerIngress);
  }
}(this, function(ApiClient, V1LoadBalancerIngress) {
  'use strict';




  /**
   * The V1LoadBalancerStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1LoadBalancerStatus
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1LoadBalancerStatus</code>.
   * LoadBalancerStatus represents the status of a load-balancer.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1LoadBalancerStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V1LoadBalancerStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1LoadBalancerStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1LoadBalancerStatus} The populated <code>V1LoadBalancerStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ingress')) {
        obj['ingress'] = ApiClient.convertToType(data['ingress'], [V1LoadBalancerIngress]);
      }
    }
    return obj;
  }

  /**
   * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1LoadBalancerIngress>} ingress
   */
  exports.prototype['ingress'] = undefined;



  return exports;
}));


