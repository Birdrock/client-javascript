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
    define(['ApiClient', 'model/V1beta1CPUTargetUtilization', 'model/V1beta1SubresourceReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1CPUTargetUtilization'), require('./V1beta1SubresourceReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1HorizontalPodAutoscalerSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1beta1CPUTargetUtilization, root.Kubernetes.V1beta1SubresourceReference);
  }
}(this, function(ApiClient, V1beta1CPUTargetUtilization, V1beta1SubresourceReference) {
  'use strict';




  /**
   * The V1beta1HorizontalPodAutoscalerSpec model module.
   * @module model/V1beta1HorizontalPodAutoscalerSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1beta1HorizontalPodAutoscalerSpec</code>.
   * specification of a horizontal pod autoscaler.
   * @alias module:model/V1beta1HorizontalPodAutoscalerSpec
   * @class
   * @param maxReplicas {Integer} upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
   * @param scaleRef {module:model/V1beta1SubresourceReference} reference to Scale subresource; horizontal pod autoscaler will learn the current resource consumption from its status, and will set the desired number of pods by modifying its spec.
   */
  var exports = function(maxReplicas, scaleRef) {
    var _this = this;


    _this['maxReplicas'] = maxReplicas;

    _this['scaleRef'] = scaleRef;
  };

  /**
   * Constructs a <code>V1beta1HorizontalPodAutoscalerSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1HorizontalPodAutoscalerSpec} obj Optional instance to populate.
   * @return {module:model/V1beta1HorizontalPodAutoscalerSpec} The populated <code>V1beta1HorizontalPodAutoscalerSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cpuUtilization')) {
        obj['cpuUtilization'] = V1beta1CPUTargetUtilization.constructFromObject(data['cpuUtilization']);
      }
      if (data.hasOwnProperty('maxReplicas')) {
        obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Integer');
      }
      if (data.hasOwnProperty('minReplicas')) {
        obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Integer');
      }
      if (data.hasOwnProperty('scaleRef')) {
        obj['scaleRef'] = V1beta1SubresourceReference.constructFromObject(data['scaleRef']);
      }
    }
    return obj;
  }

  /**
   * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified it defaults to the target CPU utilization at 80% of the requested resources.
   * @member {module:model/V1beta1CPUTargetUtilization} cpuUtilization
   */
  exports.prototype['cpuUtilization'] = undefined;
  /**
   * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
   * @member {Integer} maxReplicas
   */
  exports.prototype['maxReplicas'] = undefined;
  /**
   * lower limit for the number of pods that can be set by the autoscaler, default 1.
   * @member {Integer} minReplicas
   */
  exports.prototype['minReplicas'] = undefined;
  /**
   * reference to Scale subresource; horizontal pod autoscaler will learn the current resource consumption from its status, and will set the desired number of pods by modifying its spec.
   * @member {module:model/V1beta1SubresourceReference} scaleRef
   */
  exports.prototype['scaleRef'] = undefined;



  return exports;
}));

