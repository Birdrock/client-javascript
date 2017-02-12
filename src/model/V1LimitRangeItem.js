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
    define(['ApiClient', 'model/ResourceQuantity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceQuantity'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1LimitRangeItem = factory(root.Kubernetes.ApiClient, root.Kubernetes.ResourceQuantity);
  }
}(this, function(ApiClient, ResourceQuantity) {
  'use strict';




  /**
   * The V1LimitRangeItem model module.
   * @module model/V1LimitRangeItem
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1LimitRangeItem</code>.
   * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
   * @alias module:model/V1LimitRangeItem
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V1LimitRangeItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1LimitRangeItem} obj Optional instance to populate.
   * @return {module:model/V1LimitRangeItem} The populated <code>V1LimitRangeItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], {'String': ResourceQuantity});
      }
      if (data.hasOwnProperty('defaultRequest')) {
        obj['defaultRequest'] = ApiClient.convertToType(data['defaultRequest'], {'String': ResourceQuantity});
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], {'String': ResourceQuantity});
      }
      if (data.hasOwnProperty('maxLimitRequestRatio')) {
        obj['maxLimitRequestRatio'] = ApiClient.convertToType(data['maxLimitRequestRatio'], {'String': ResourceQuantity});
      }
      if (data.hasOwnProperty('min')) {
        obj['min'] = ApiClient.convertToType(data['min'], {'String': ResourceQuantity});
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Default resource requirement limit value by resource name if resource limit is omitted.
   * @member {Object.<String, module:model/ResourceQuantity>} default
   */
  exports.prototype['default'] = undefined;
  /**
   * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
   * @member {Object.<String, module:model/ResourceQuantity>} defaultRequest
   */
  exports.prototype['defaultRequest'] = undefined;
  /**
   * Max usage constraints on this kind by resource name.
   * @member {Object.<String, module:model/ResourceQuantity>} max
   */
  exports.prototype['max'] = undefined;
  /**
   * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
   * @member {Object.<String, module:model/ResourceQuantity>} maxLimitRequestRatio
   */
  exports.prototype['maxLimitRequestRatio'] = undefined;
  /**
   * Min usage constraints on this kind by resource name.
   * @member {Object.<String, module:model/ResourceQuantity>} min
   */
  exports.prototype['min'] = undefined;
  /**
   * Type of resource that this limit applies to.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


