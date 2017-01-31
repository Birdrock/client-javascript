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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1OwnerReference = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1OwnerReference model module.
   * @module model/V1OwnerReference
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1OwnerReference</code>.
   * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
   * @alias module:model/V1OwnerReference
   * @class
   * @param apiVersion {String} API version of the referent.
   * @param kind {String} Kind of the referent. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @param name {String} Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @param uid {String} UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  var exports = function(apiVersion, kind, name, uid) {
    var _this = this;

    _this['apiVersion'] = apiVersion;

    _this['kind'] = kind;
    _this['name'] = name;
    _this['uid'] = uid;
  };

  /**
   * Constructs a <code>V1OwnerReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1OwnerReference} obj Optional instance to populate.
   * @return {module:model/V1OwnerReference} The populated <code>V1OwnerReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('controller')) {
        obj['controller'] = ApiClient.convertToType(data['controller'], 'Boolean');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
    }
    return obj;
  }

  /**
   * API version of the referent.
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * If true, this reference points to the managing controller.
   * @member {Boolean} controller
   */
  exports.prototype['controller'] = undefined;
  /**
   * Kind of the referent. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;



  return exports;
}));


