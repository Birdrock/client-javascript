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
    define(['ApiClient', 'model/V1beta1IDRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1IDRange'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1RunAsUserStrategyOptions = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1beta1IDRange);
  }
}(this, function(ApiClient, V1beta1IDRange) {
  'use strict';




  /**
   * The V1beta1RunAsUserStrategyOptions model module.
   * @module model/V1beta1RunAsUserStrategyOptions
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1beta1RunAsUserStrategyOptions</code>.
   * Run A sUser Strategy Options defines the strategy type and any options used to create the strategy.
   * @alias module:model/V1beta1RunAsUserStrategyOptions
   * @class
   * @param rule {String} Rule is the strategy that will dictate the allowable RunAsUser values that may be set.
   */
  var exports = function(rule) {
    var _this = this;


    _this['rule'] = rule;
  };

  /**
   * Constructs a <code>V1beta1RunAsUserStrategyOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1RunAsUserStrategyOptions} obj Optional instance to populate.
   * @return {module:model/V1beta1RunAsUserStrategyOptions} The populated <code>V1beta1RunAsUserStrategyOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ranges')) {
        obj['ranges'] = ApiClient.convertToType(data['ranges'], [V1beta1IDRange]);
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
      }
    }
    return obj;
  }

  /**
   * Ranges are the allowed ranges of uids that may be used.
   * @member {Array.<module:model/V1beta1IDRange>} ranges
   */
  exports.prototype['ranges'] = undefined;
  /**
   * Rule is the strategy that will dictate the allowable RunAsUser values that may be set.
   * @member {String} rule
   */
  exports.prototype['rule'] = undefined;



  return exports;
}));

