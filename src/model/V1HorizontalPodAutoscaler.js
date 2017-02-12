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
    define(['ApiClient', 'model/V1HorizontalPodAutoscalerSpec', 'model/V1HorizontalPodAutoscalerStatus', 'model/V1ObjectMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1HorizontalPodAutoscalerSpec'), require('./V1HorizontalPodAutoscalerStatus'), require('./V1ObjectMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1HorizontalPodAutoscaler = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1HorizontalPodAutoscalerSpec, root.Kubernetes.V1HorizontalPodAutoscalerStatus, root.Kubernetes.V1ObjectMeta);
  }
}(this, function(ApiClient, V1HorizontalPodAutoscalerSpec, V1HorizontalPodAutoscalerStatus, V1ObjectMeta) {
  'use strict';




  /**
   * The V1HorizontalPodAutoscaler model module.
   * @module model/V1HorizontalPodAutoscaler
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1HorizontalPodAutoscaler</code>.
   * configuration of a horizontal pod autoscaler.
   * @alias module:model/V1HorizontalPodAutoscaler
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V1HorizontalPodAutoscaler</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1HorizontalPodAutoscaler} obj Optional instance to populate.
   * @return {module:model/V1HorizontalPodAutoscaler} The populated <code>V1HorizontalPodAutoscaler</code> instance.
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
        obj['spec'] = V1HorizontalPodAutoscalerSpec.constructFromObject(data['spec']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = V1HorizontalPodAutoscalerStatus.constructFromObject(data['status']);
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
   * Standard object metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:model/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * behaviour of autoscaler. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status.
   * @member {module:model/V1HorizontalPodAutoscalerSpec} spec
   */
  exports.prototype['spec'] = undefined;
  /**
   * current information about the autoscaler.
   * @member {module:model/V1HorizontalPodAutoscalerStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


