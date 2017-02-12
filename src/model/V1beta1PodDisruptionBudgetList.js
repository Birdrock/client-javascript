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
    define(['ApiClient', 'model/UnversionedListMeta', 'model/V1beta1PodDisruptionBudget'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedListMeta'), require('./V1beta1PodDisruptionBudget'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1PodDisruptionBudgetList = factory(root.Kubernetes.ApiClient, root.Kubernetes.UnversionedListMeta, root.Kubernetes.V1beta1PodDisruptionBudget);
  }
}(this, function(ApiClient, UnversionedListMeta, V1beta1PodDisruptionBudget) {
  'use strict';




  /**
   * The V1beta1PodDisruptionBudgetList model module.
   * @module model/V1beta1PodDisruptionBudgetList
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1beta1PodDisruptionBudgetList</code>.
   * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
   * @alias module:model/V1beta1PodDisruptionBudgetList
   * @class
   * @param items {Array.<module:model/V1beta1PodDisruptionBudget>} 
   */
  var exports = function(items) {
    var _this = this;


    _this['items'] = items;


  };

  /**
   * Constructs a <code>V1beta1PodDisruptionBudgetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1PodDisruptionBudgetList} obj Optional instance to populate.
   * @return {module:model/V1beta1PodDisruptionBudgetList} The populated <code>V1beta1PodDisruptionBudgetList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [V1beta1PodDisruptionBudget]);
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = UnversionedListMeta.constructFromObject(data['metadata']);
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
   * @member {Array.<module:model/V1beta1PodDisruptionBudget>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {module:model/UnversionedListMeta} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


