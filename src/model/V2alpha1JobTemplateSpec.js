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
    define(['ApiClient', 'model/V1ObjectMeta', 'model/V2alpha1JobSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ObjectMeta'), require('./V2alpha1JobSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V2alpha1JobTemplateSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1ObjectMeta, root.Kubernetes.V2alpha1JobSpec);
  }
}(this, function(ApiClient, V1ObjectMeta, V2alpha1JobSpec) {
  'use strict';




  /**
   * The V2alpha1JobTemplateSpec model module.
   * @module model/V2alpha1JobTemplateSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V2alpha1JobTemplateSpec</code>.
   * JobTemplateSpec describes the data a Job should have when created from a template
   * @alias module:model/V2alpha1JobTemplateSpec
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V2alpha1JobTemplateSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2alpha1JobTemplateSpec} obj Optional instance to populate.
   * @return {module:model/V2alpha1JobTemplateSpec} The populated <code>V2alpha1JobTemplateSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('spec')) {
        obj['spec'] = V2alpha1JobSpec.constructFromObject(data['spec']);
      }
    }
    return obj;
  }

  /**
   * Standard object's metadata of the jobs created from this template. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:model/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Specification of the desired behavior of the job. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:model/V2alpha1JobSpec} spec
   */
  exports.prototype['spec'] = undefined;



  return exports;
}));


