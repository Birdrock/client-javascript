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
    define(['ApiClient', 'model/UnversionedLabelSelector', 'model/V1PodTemplateSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedLabelSelector'), require('./V1PodTemplateSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V2alpha1JobSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.UnversionedLabelSelector, root.Kubernetes.V1PodTemplateSpec);
  }
}(this, function(ApiClient, UnversionedLabelSelector, V1PodTemplateSpec) {
  'use strict';




  /**
   * The V2alpha1JobSpec model module.
   * @module model/V2alpha1JobSpec
   * @version unversioned
   */

  /**
   * Constructs a new <code>V2alpha1JobSpec</code>.
   * JobSpec describes how the job execution will look like.
   * @alias module:model/V2alpha1JobSpec
   * @class
   * @param template {module:model/V1PodTemplateSpec} Template is the object that describes the pod that will be created when executing a job. More info: http://kubernetes.io/docs/user-guide/jobs
   */
  var exports = function(template) {
    var _this = this;






    _this['template'] = template;
  };

  /**
   * Constructs a <code>V2alpha1JobSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2alpha1JobSpec} obj Optional instance to populate.
   * @return {module:model/V2alpha1JobSpec} The populated <code>V2alpha1JobSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activeDeadlineSeconds')) {
        obj['activeDeadlineSeconds'] = ApiClient.convertToType(data['activeDeadlineSeconds'], 'Integer');
      }
      if (data.hasOwnProperty('completions')) {
        obj['completions'] = ApiClient.convertToType(data['completions'], 'Integer');
      }
      if (data.hasOwnProperty('manualSelector')) {
        obj['manualSelector'] = ApiClient.convertToType(data['manualSelector'], 'Boolean');
      }
      if (data.hasOwnProperty('parallelism')) {
        obj['parallelism'] = ApiClient.convertToType(data['parallelism'], 'Integer');
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = UnversionedLabelSelector.constructFromObject(data['selector']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = V1PodTemplateSpec.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * Optional duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
   * @member {Integer} activeDeadlineSeconds
   */
  exports.prototype['activeDeadlineSeconds'] = undefined;
  /**
   * Completions specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: http://kubernetes.io/docs/user-guide/jobs
   * @member {Integer} completions
   */
  exports.prototype['completions'] = undefined;
  /**
   * ManualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: http://releases.k8s.io/HEAD/docs/design/selector-generation.md
   * @member {Boolean} manualSelector
   */
  exports.prototype['manualSelector'] = undefined;
  /**
   * Parallelism specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: http://kubernetes.io/docs/user-guide/jobs
   * @member {Integer} parallelism
   */
  exports.prototype['parallelism'] = undefined;
  /**
   * Selector is a label query over pods that should match the pod count. Normally, the system sets this field for you. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   * @member {module:model/UnversionedLabelSelector} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * Template is the object that describes the pod that will be created when executing a job. More info: http://kubernetes.io/docs/user-guide/jobs
   * @member {module:model/V1PodTemplateSpec} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));


