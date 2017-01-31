/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.0
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
    define(['ApiClient', 'model/V1Time'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Time'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1PodCondition = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1Time);
  }
}(this, function(ApiClient, V1Time) {
  'use strict';




  /**
   * The V1PodCondition model module.
   * @module model/V1PodCondition
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1PodCondition</code>.
   * PodCondition contains details for the current condition of this pod.
   * @alias module:model/V1PodCondition
   * @class
   * @param status {String} Status is the status of the condition. Can be True, False, Unknown. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   * @param type {String} Type is the type of the condition. Currently only Ready. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   */
  var exports = function(status, type) {
    var _this = this;





    _this['status'] = status;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>V1PodCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1PodCondition} obj Optional instance to populate.
   * @return {module:model/V1PodCondition} The populated <code>V1PodCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastProbeTime')) {
        obj['lastProbeTime'] = V1Time.constructFromObject(data['lastProbeTime']);
      }
      if (data.hasOwnProperty('lastTransitionTime')) {
        obj['lastTransitionTime'] = V1Time.constructFromObject(data['lastTransitionTime']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Last time we probed the condition.
   * @member {module:model/V1Time} lastProbeTime
   */
  exports.prototype['lastProbeTime'] = undefined;
  /**
   * Last time the condition transitioned from one status to another.
   * @member {module:model/V1Time} lastTransitionTime
   */
  exports.prototype['lastTransitionTime'] = undefined;
  /**
   * Human-readable message indicating details about last transition.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Status is the status of the condition. Can be True, False, Unknown. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Type is the type of the condition. Currently only Ready. More info: http://kubernetes.io/docs/user-guide/pod-states#pod-conditions
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


