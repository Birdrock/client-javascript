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
    define(['ApiClient', 'model/V1LimitRangeSpec', 'model/V1ObjectMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LimitRangeSpec'), require('./V1ObjectMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1LimitRange = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1LimitRangeSpec, root.Kubernetes.V1ObjectMeta);
  }
}(this, function(ApiClient, V1LimitRangeSpec, V1ObjectMeta) {
  'use strict';




  /**
   * The V1LimitRange model module.
   * @module model/V1LimitRange
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1LimitRange</code>.
   * LimitRange sets resource usage limits for each kind of resource in a Namespace.
   * @alias module:model/V1LimitRange
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>V1LimitRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1LimitRange} obj Optional instance to populate.
   * @return {module:model/V1LimitRange} The populated <code>V1LimitRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('spec')) {
        obj['spec'] = V1LimitRangeSpec.constructFromObject(data['spec']);
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
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Standard object's metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:model/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Spec defines the limits enforced. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:model/V1LimitRangeSpec} spec
   */
  exports.prototype['spec'] = undefined;



  return exports;
}));


