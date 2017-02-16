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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1EndpointAddress', 'io.kubernetes.js/io.kubernetes.js.models/V1EndpointPort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1EndpointAddress'), require('./V1EndpointPort'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1EndpointSubset = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1EndpointAddress, root.KubernetesJsClient.V1EndpointPort);
  }
}(this, function(ApiClient, V1EndpointAddress, V1EndpointPort) {
  'use strict';




  /**
   * The V1EndpointSubset model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1EndpointSubset
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1EndpointSubset</code>.
   * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:   {     Addresses: [{\&quot;ip\&quot;: \&quot;10.10.1.1\&quot;}, {\&quot;ip\&quot;: \&quot;10.10.2.2\&quot;}],     Ports:     [{\&quot;name\&quot;: \&quot;a\&quot;, \&quot;port\&quot;: 8675}, {\&quot;name\&quot;: \&quot;b\&quot;, \&quot;port\&quot;: 309}]   } The resulting set of endpoints can be viewed as:     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1EndpointSubset
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1EndpointSubset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1EndpointSubset} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1EndpointSubset} The populated <code>V1EndpointSubset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [V1EndpointAddress]);
      }
      if (data.hasOwnProperty('notReadyAddresses')) {
        obj['notReadyAddresses'] = ApiClient.convertToType(data['notReadyAddresses'], [V1EndpointAddress]);
      }
      if (data.hasOwnProperty('ports')) {
        obj['ports'] = ApiClient.convertToType(data['ports'], [V1EndpointPort]);
      }
    }
    return obj;
  }

  /**
   * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1EndpointAddress>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1EndpointAddress>} notReadyAddresses
   */
  exports.prototype['notReadyAddresses'] = undefined;
  /**
   * Port numbers available on the related IP addresses.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1EndpointPort>} ports
   */
  exports.prototype['ports'] = undefined;



  return exports;
}));


