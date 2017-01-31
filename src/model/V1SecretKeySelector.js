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
    root.Kubernetes.V1SecretKeySelector = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1SecretKeySelector model module.
   * @module model/V1SecretKeySelector
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1SecretKeySelector</code>.
   * SecretKeySelector selects a key of a Secret.
   * @alias module:model/V1SecretKeySelector
   * @class
   * @param key {String} The key of the secret to select from.  Must be a valid secret key.
   */
  var exports = function(key) {
    var _this = this;

    _this['key'] = key;


  };

  /**
   * Constructs a <code>V1SecretKeySelector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1SecretKeySelector} obj Optional instance to populate.
   * @return {module:model/V1SecretKeySelector} The populated <code>V1SecretKeySelector</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('optional')) {
        obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The key of the secret to select from.  Must be a valid secret key.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specify whether the Secret or it's key must be defined
   * @member {Boolean} optional
   */
  exports.prototype['optional'] = undefined;



  return exports;
}));


