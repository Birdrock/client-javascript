/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: unversioned
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1LoadBalancerStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LoadBalancerStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1IngressStatus = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1LoadBalancerStatus);
  }
}(this, function(ApiClient, V1LoadBalancerStatus) {
  'use strict';




  /**
   * The V1beta1IngressStatus model module.
   * @module model/V1beta1IngressStatus
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1beta1IngressStatus</code>.
   * IngressStatus describe the current state of the Ingress.
   * @alias module:model/V1beta1IngressStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V1beta1IngressStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1IngressStatus} obj Optional instance to populate.
   * @return {module:model/V1beta1IngressStatus} The populated <code>V1beta1IngressStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loadBalancer')) {
        obj['loadBalancer'] = V1LoadBalancerStatus.constructFromObject(data['loadBalancer']);
      }
    }
    return obj;
  }

  /**
   * LoadBalancer contains the current status of the load-balancer.
   * @member {module:model/V1LoadBalancerStatus} loadBalancer
   */
  exports.prototype['loadBalancer'] = undefined;



  return exports;
}));


