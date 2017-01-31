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
    root.Kubernetes.V1AzureFileVolumeSource = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1AzureFileVolumeSource model module.
   * @module model/V1AzureFileVolumeSource
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1AzureFileVolumeSource</code>.
   * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
   * @alias module:model/V1AzureFileVolumeSource
   * @class
   * @param secretName {String} the name of secret that contains Azure Storage Account Name and Key
   * @param shareName {String} Share Name
   */
  var exports = function(secretName, shareName) {
    var _this = this;


    _this['secretName'] = secretName;
    _this['shareName'] = shareName;
  };

  /**
   * Constructs a <code>V1AzureFileVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1AzureFileVolumeSource} obj Optional instance to populate.
   * @return {module:model/V1AzureFileVolumeSource} The populated <code>V1AzureFileVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('secretName')) {
        obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
      }
      if (data.hasOwnProperty('shareName')) {
        obj['shareName'] = ApiClient.convertToType(data['shareName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * the name of secret that contains Azure Storage Account Name and Key
   * @member {String} secretName
   */
  exports.prototype['secretName'] = undefined;
  /**
   * Share Name
   * @member {String} shareName
   */
  exports.prototype['shareName'] = undefined;



  return exports;
}));

