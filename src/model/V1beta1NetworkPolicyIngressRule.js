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
    define(['ApiClient', 'model/V1beta1NetworkPolicyPeer', 'model/V1beta1NetworkPolicyPort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1NetworkPolicyPeer'), require('./V1beta1NetworkPolicyPort'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1NetworkPolicyIngressRule = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1beta1NetworkPolicyPeer, root.Kubernetes.V1beta1NetworkPolicyPort);
  }
}(this, function(ApiClient, V1beta1NetworkPolicyPeer, V1beta1NetworkPolicyPort) {
  'use strict';




  /**
   * The V1beta1NetworkPolicyIngressRule model module.
   * @module model/V1beta1NetworkPolicyIngressRule
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1beta1NetworkPolicyIngressRule</code>.
   * This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
   * @alias module:model/V1beta1NetworkPolicyIngressRule
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1beta1NetworkPolicyIngressRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1NetworkPolicyIngressRule} obj Optional instance to populate.
   * @return {module:model/V1beta1NetworkPolicyIngressRule} The populated <code>V1beta1NetworkPolicyIngressRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], [V1beta1NetworkPolicyPeer]);
      }
      if (data.hasOwnProperty('ports')) {
        obj['ports'] = ApiClient.convertToType(data['ports'], [V1beta1NetworkPolicyPort]);
      }
    }
    return obj;
  }

  /**
   * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is not provided, this rule matches all sources (traffic not restricted by source). If this field is empty, this rule matches no sources (no traffic matches). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
   * @member {Array.<module:model/V1beta1NetworkPolicyPeer>} from
   */
  exports.prototype['from'] = undefined;
  /**
   * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is not provided, this rule matches all ports (traffic not restricted by port). If this field is empty, this rule matches no ports (no traffic matches). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
   * @member {Array.<module:model/V1beta1NetworkPolicyPort>} ports
   */
  exports.prototype['ports'] = undefined;



  return exports;
}));


