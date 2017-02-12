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
    root.Kubernetes.V1ResourceFieldSelector = factory(root.Kubernetes.ApiClient, root.Kubernetes.ResourceQuantity);
  }
}(this, function(ApiClient, ResourceQuantity) {
  'use strict';




  /**
   * The V1ResourceFieldSelector model module.
   * @module model/V1ResourceFieldSelector
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1ResourceFieldSelector</code>.
   * ResourceFieldSelector represents container resources (cpu, memory) and their output format
   * @alias module:model/V1ResourceFieldSelector
   * @class
   * @param resource {String} Required: resource to select
   */
  var exports = function(resource) {
    var _this = this;



    _this['resource'] = resource;
  };

  /**
   * Constructs a <code>V1ResourceFieldSelector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1ResourceFieldSelector} obj Optional instance to populate.
   * @return {module:model/V1ResourceFieldSelector} The populated <code>V1ResourceFieldSelector</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('containerName')) {
        obj['containerName'] = ApiClient.convertToType(data['containerName'], 'String');
      }
      if (data.hasOwnProperty('divisor')) {
        obj['divisor'] = ResourceQuantity.constructFromObject(data['divisor']);
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
    }
    return obj;
  }

  /**
   * Container name: required for volumes, optional for env vars
   * @member {String} containerName
   */
  exports.prototype['containerName'] = undefined;
  /**
   * Specifies the output format of the exposed resources, defaults to \"1\"
   * @member {module:model/ResourceQuantity} divisor
   */
  exports.prototype['divisor'] = undefined;
  /**
   * Required: resource to select
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;



  return exports;
}));


