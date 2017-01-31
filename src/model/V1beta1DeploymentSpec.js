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
    define(['ApiClient', 'model/V1LabelSelector', 'model/V1PodTemplateSpec', 'model/V1beta1DeploymentStrategy', 'model/V1beta1RollbackConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LabelSelector'), require('./V1PodTemplateSpec'), require('./V1beta1DeploymentStrategy'), require('./V1beta1RollbackConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1DeploymentSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1LabelSelector, root.Kubernetes.V1PodTemplateSpec, root.Kubernetes.V1beta1DeploymentStrategy, root.Kubernetes.V1beta1RollbackConfig);
  }
}(this, function(ApiClient, V1LabelSelector, V1PodTemplateSpec, V1beta1DeploymentStrategy, V1beta1RollbackConfig) {
  'use strict';




  /**
   * The V1beta1DeploymentSpec model module.
   * @module model/V1beta1DeploymentSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1beta1DeploymentSpec</code>.
   * DeploymentSpec is the specification of the desired behavior of the Deployment.
   * @alias module:model/V1beta1DeploymentSpec
   * @class
   * @param template {module:model/V1PodTemplateSpec} Template describes the pods that will be created.
   */
  var exports = function(template) {
    var _this = this;









    _this['template'] = template;
  };

  /**
   * Constructs a <code>V1beta1DeploymentSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1DeploymentSpec} obj Optional instance to populate.
   * @return {module:model/V1beta1DeploymentSpec} The populated <code>V1beta1DeploymentSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('minReadySeconds')) {
        obj['minReadySeconds'] = ApiClient.convertToType(data['minReadySeconds'], 'Integer');
      }
      if (data.hasOwnProperty('paused')) {
        obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
      }
      if (data.hasOwnProperty('progressDeadlineSeconds')) {
        obj['progressDeadlineSeconds'] = ApiClient.convertToType(data['progressDeadlineSeconds'], 'Integer');
      }
      if (data.hasOwnProperty('replicas')) {
        obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Integer');
      }
      if (data.hasOwnProperty('revisionHistoryLimit')) {
        obj['revisionHistoryLimit'] = ApiClient.convertToType(data['revisionHistoryLimit'], 'Integer');
      }
      if (data.hasOwnProperty('rollbackTo')) {
        obj['rollbackTo'] = V1beta1RollbackConfig.constructFromObject(data['rollbackTo']);
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
      }
      if (data.hasOwnProperty('strategy')) {
        obj['strategy'] = V1beta1DeploymentStrategy.constructFromObject(data['strategy']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = V1PodTemplateSpec.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   * @member {Integer} minReadySeconds
   */
  exports.prototype['minReadySeconds'] = undefined;
  /**
   * Indicates that the deployment is paused and will not be processed by the deployment controller.
   * @member {Boolean} paused
   */
  exports.prototype['paused'] = undefined;
  /**
   * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Once autoRollback is implemented, the deployment controller will automatically rollback failed deployments. Note that progress will not be estimated during the time a deployment is paused. This is not set by default.
   * @member {Integer} progressDeadlineSeconds
   */
  exports.prototype['progressDeadlineSeconds'] = undefined;
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   * @member {Integer} replicas
   */
  exports.prototype['replicas'] = undefined;
  /**
   * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified.
   * @member {Integer} revisionHistoryLimit
   */
  exports.prototype['revisionHistoryLimit'] = undefined;
  /**
   * The config this deployment is rolling back to. Will be cleared after rollback is done.
   * @member {module:model/V1beta1RollbackConfig} rollbackTo
   */
  exports.prototype['rollbackTo'] = undefined;
  /**
   * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
   * @member {module:model/V1LabelSelector} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * The deployment strategy to use to replace existing pods with new ones.
   * @member {module:model/V1beta1DeploymentStrategy} strategy
   */
  exports.prototype['strategy'] = undefined;
  /**
   * Template describes the pods that will be created.
   * @member {module:model/V1PodTemplateSpec} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));

