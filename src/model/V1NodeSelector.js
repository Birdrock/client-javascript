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
    define(['ApiClient', 'model/V1NodeSelectorTerm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1NodeSelectorTerm'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1NodeSelector = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1NodeSelectorTerm);
  }
}(this, function(ApiClient, V1NodeSelectorTerm) {
  'use strict';




  /**
   * The V1NodeSelector model module.
   * @module model/V1NodeSelector
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1NodeSelector</code>.
   * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
   * @alias module:model/V1NodeSelector
   * @class
   * @param nodeSelectorTerms {Array.<module:model/V1NodeSelectorTerm>} Required. A list of node selector terms. The terms are ORed.
   */
  var exports = function(nodeSelectorTerms) {
    var _this = this;

    _this['nodeSelectorTerms'] = nodeSelectorTerms;
  };

  /**
   * Constructs a <code>V1NodeSelector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1NodeSelector} obj Optional instance to populate.
   * @return {module:model/V1NodeSelector} The populated <code>V1NodeSelector</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nodeSelectorTerms')) {
        obj['nodeSelectorTerms'] = ApiClient.convertToType(data['nodeSelectorTerms'], [V1NodeSelectorTerm]);
      }
    }
    return obj;
  }

  /**
   * Required. A list of node selector terms. The terms are ORed.
   * @member {Array.<module:model/V1NodeSelectorTerm>} nodeSelectorTerms
   */
  exports.prototype['nodeSelectorTerms'] = undefined;



  return exports;
}));


