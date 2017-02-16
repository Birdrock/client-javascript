/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.5.1-660c2a2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1CrossVersionObjectReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1CrossVersionObjectReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1HorizontalPodAutoscalerSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1CrossVersionObjectReference);
  }
}(this, function(ApiClient, V1CrossVersionObjectReference) {
  'use strict';




  /**
   * The V1HorizontalPodAutoscalerSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1HorizontalPodAutoscalerSpec
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1HorizontalPodAutoscalerSpec</code>.
   * specification of a horizontal pod autoscaler.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1HorizontalPodAutoscalerSpec
   * @class
   * @param maxReplicas {Number} upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
   * @param scaleTargetRef {module:io.kubernetes.js/io.kubernetes.js.models/V1CrossVersionObjectReference} reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
   */
  var exports = function(maxReplicas, scaleTargetRef) {
    var _this = this;

    _this['maxReplicas'] = maxReplicas;

    _this['scaleTargetRef'] = scaleTargetRef;

  };

  /**
   * Constructs a <code>V1HorizontalPodAutoscalerSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1HorizontalPodAutoscalerSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1HorizontalPodAutoscalerSpec} The populated <code>V1HorizontalPodAutoscalerSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxReplicas')) {
        obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Number');
      }
      if (data.hasOwnProperty('minReplicas')) {
        obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Number');
      }
      if (data.hasOwnProperty('scaleTargetRef')) {
        obj['scaleTargetRef'] = V1CrossVersionObjectReference.constructFromObject(data['scaleTargetRef']);
      }
      if (data.hasOwnProperty('targetCPUUtilizationPercentage')) {
        obj['targetCPUUtilizationPercentage'] = ApiClient.convertToType(data['targetCPUUtilizationPercentage'], 'Number');
      }
    }
    return obj;
  }

  /**
   * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
   * @member {Number} maxReplicas
   */
  exports.prototype['maxReplicas'] = undefined;
  /**
   * lower limit for the number of pods that can be set by the autoscaler, default 1.
   * @member {Number} minReplicas
   */
  exports.prototype['minReplicas'] = undefined;
  /**
   * reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1CrossVersionObjectReference} scaleTargetRef
   */
  exports.prototype['scaleTargetRef'] = undefined;
  /**
   * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
   * @member {Number} targetCPUUtilizationPercentage
   */
  exports.prototype['targetCPUUtilizationPercentage'] = undefined;



  return exports;
}));

