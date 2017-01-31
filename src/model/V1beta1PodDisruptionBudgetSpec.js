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
    define(['ApiClient', 'model/IntstrIntOrString', 'model/V1LabelSelector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntstrIntOrString'), require('./V1LabelSelector'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1PodDisruptionBudgetSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.IntstrIntOrString, root.Kubernetes.V1LabelSelector);
  }
}(this, function(ApiClient, IntstrIntOrString, V1LabelSelector) {
  'use strict';




  /**
   * The V1beta1PodDisruptionBudgetSpec model module.
   * @module model/V1beta1PodDisruptionBudgetSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1beta1PodDisruptionBudgetSpec</code>.
   * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
   * @alias module:model/V1beta1PodDisruptionBudgetSpec
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1beta1PodDisruptionBudgetSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1PodDisruptionBudgetSpec} obj Optional instance to populate.
   * @return {module:model/V1beta1PodDisruptionBudgetSpec} The populated <code>V1beta1PodDisruptionBudgetSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('minAvailable')) {
        obj['minAvailable'] = IntstrIntOrString.constructFromObject(data['minAvailable']);
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
      }
    }
    return obj;
  }

  /**
   * An eviction is allowed if at least \"minAvailable\" pods selected by \"selector\" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying \"100%\".
   * @member {module:model/IntstrIntOrString} minAvailable
   */
  exports.prototype['minAvailable'] = undefined;
  /**
   * Label query over pods whose evictions are managed by the disruption budget.
   * @member {module:model/V1LabelSelector} selector
   */
  exports.prototype['selector'] = undefined;



  return exports;
}));

