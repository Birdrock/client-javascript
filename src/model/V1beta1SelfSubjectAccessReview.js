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
    define(['ApiClient', 'model/V1ObjectMeta', 'model/V1beta1SelfSubjectAccessReviewSpec', 'model/V1beta1SubjectAccessReviewStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ObjectMeta'), require('./V1beta1SelfSubjectAccessReviewSpec'), require('./V1beta1SubjectAccessReviewStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1beta1SelfSubjectAccessReview = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1ObjectMeta, root.Kubernetes.V1beta1SelfSubjectAccessReviewSpec, root.Kubernetes.V1beta1SubjectAccessReviewStatus);
  }
}(this, function(ApiClient, V1ObjectMeta, V1beta1SelfSubjectAccessReviewSpec, V1beta1SubjectAccessReviewStatus) {
  'use strict';




  /**
   * The V1beta1SelfSubjectAccessReview model module.
   * @module model/V1beta1SelfSubjectAccessReview
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1beta1SelfSubjectAccessReview</code>.
   * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means \&quot;in all namespaces\&quot;.  Self is a special case, because users should always be able to check whether they can perform an action
   * @alias module:model/V1beta1SelfSubjectAccessReview
   * @class
   * @param spec {module:model/V1beta1SelfSubjectAccessReviewSpec} Spec holds information about the request being evaluated.  user and groups must be empty
   */
  var exports = function(spec) {
    var _this = this;




    _this['spec'] = spec;

  };

  /**
   * Constructs a <code>V1beta1SelfSubjectAccessReview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1beta1SelfSubjectAccessReview} obj Optional instance to populate.
   * @return {module:model/V1beta1SelfSubjectAccessReview} The populated <code>V1beta1SelfSubjectAccessReview</code> instance.
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
        obj['spec'] = V1beta1SelfSubjectAccessReviewSpec.constructFromObject(data['spec']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = V1beta1SubjectAccessReviewStatus.constructFromObject(data['status']);
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
   * @member {module:model/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Spec holds information about the request being evaluated.  user and groups must be empty
   * @member {module:model/V1beta1SelfSubjectAccessReviewSpec} spec
   */
  exports.prototype['spec'] = undefined;
  /**
   * Status is filled in by the server and indicates whether the request is allowed or not
   * @member {module:model/V1beta1SubjectAccessReviewStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


