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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/UnversionedTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedTime'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1HorizontalPodAutoscalerStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.UnversionedTime);
  }
}(this, function(ApiClient, UnversionedTime) {
  'use strict';




  /**
   * The V1beta1HorizontalPodAutoscalerStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1HorizontalPodAutoscalerStatus
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1HorizontalPodAutoscalerStatus</code>.
   * current status of a horizontal pod autoscaler
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HorizontalPodAutoscalerStatus
   * @class
   * @param currentReplicas {Number} current number of replicas of pods managed by this autoscaler.
   * @param desiredReplicas {Number} desired number of replicas of pods managed by this autoscaler.
   */
  var exports = function(currentReplicas, desiredReplicas) {
    var _this = this;


    _this['currentReplicas'] = currentReplicas;
    _this['desiredReplicas'] = desiredReplicas;


  };

  /**
   * Constructs a <code>V1beta1HorizontalPodAutoscalerStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HorizontalPodAutoscalerStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HorizontalPodAutoscalerStatus} The populated <code>V1beta1HorizontalPodAutoscalerStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentCPUUtilizationPercentage')) {
        obj['currentCPUUtilizationPercentage'] = ApiClient.convertToType(data['currentCPUUtilizationPercentage'], 'Number');
      }
      if (data.hasOwnProperty('currentReplicas')) {
        obj['currentReplicas'] = ApiClient.convertToType(data['currentReplicas'], 'Number');
      }
      if (data.hasOwnProperty('desiredReplicas')) {
        obj['desiredReplicas'] = ApiClient.convertToType(data['desiredReplicas'], 'Number');
      }
      if (data.hasOwnProperty('lastScaleTime')) {
        obj['lastScaleTime'] = UnversionedTime.constructFromObject(data['lastScaleTime']);
      }
      if (data.hasOwnProperty('observedGeneration')) {
        obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
      }
    }
    return obj;
  }

  /**
   * current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
   * @member {Number} currentCPUUtilizationPercentage
   */
  exports.prototype['currentCPUUtilizationPercentage'] = undefined;
  /**
   * current number of replicas of pods managed by this autoscaler.
   * @member {Number} currentReplicas
   */
  exports.prototype['currentReplicas'] = undefined;
  /**
   * desired number of replicas of pods managed by this autoscaler.
   * @member {Number} desiredReplicas
   */
  exports.prototype['desiredReplicas'] = undefined;
  /**
   * last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedTime} lastScaleTime
   */
  exports.prototype['lastScaleTime'] = undefined;
  /**
   * most recent generation observed by this autoscaler.
   * @member {Number} observedGeneration
   */
  exports.prototype['observedGeneration'] = undefined;



  return exports;
}));


