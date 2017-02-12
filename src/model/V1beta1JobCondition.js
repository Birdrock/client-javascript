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
    define(['ApiClient', 'model/UnversionedTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedTime'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1JobCondition = factory(root.Kubernetes.ApiClient, root.Kubernetes.UnversionedTime);
  }
}(this, function(ApiClient, UnversionedTime) {
  'use strict';




  /**
   * The V1beta1JobCondition model module.
   * @module model/V1beta1JobCondition
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1beta1JobCondition</code>.
   * JobCondition describes current state of a job.
   * @alias module:model/V1beta1JobCondition
   * @class
   * @param status {String} Status of the condition, one of True, False, Unknown.
   * @param type {String} Type of job condition, Complete or Failed.
   */
  var exports = function(status, type) {
    var _this = this;





    _this['status'] = status;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>V1beta1JobCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1JobCondition} obj Optional instance to populate.
   * @return {module:model/V1beta1JobCondition} The populated <code>V1beta1JobCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastProbeTime')) {
        obj['lastProbeTime'] = UnversionedTime.constructFromObject(data['lastProbeTime']);
      }
      if (data.hasOwnProperty('lastTransitionTime')) {
        obj['lastTransitionTime'] = UnversionedTime.constructFromObject(data['lastTransitionTime']);
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
   * Last time the condition was checked.
   * @member {module:model/UnversionedTime} lastProbeTime
   */
  exports.prototype['lastProbeTime'] = undefined;
  /**
   * Last time the condition transit from one status to another.
   * @member {module:model/UnversionedTime} lastTransitionTime
   */
  exports.prototype['lastTransitionTime'] = undefined;
  /**
   * Human readable message indicating details about last transition.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * (brief) reason for the condition's last transition.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Status of the condition, one of True, False, Unknown.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Type of job condition, Complete or Failed.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


