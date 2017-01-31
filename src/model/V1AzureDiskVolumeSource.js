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
    root.Kubernetes.V1AzureDiskVolumeSource = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1AzureDiskVolumeSource model module.
   * @module model/V1AzureDiskVolumeSource
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1AzureDiskVolumeSource</code>.
   * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   * @alias module:model/V1AzureDiskVolumeSource
   * @class
   * @param diskName {String} The Name of the data disk in the blob storage
   * @param diskURI {String} The URI the data disk in the blob storage
   */
  var exports = function(diskName, diskURI) {
    var _this = this;


    _this['diskName'] = diskName;
    _this['diskURI'] = diskURI;


  };

  /**
   * Constructs a <code>V1AzureDiskVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1AzureDiskVolumeSource} obj Optional instance to populate.
   * @return {module:model/V1AzureDiskVolumeSource} The populated <code>V1AzureDiskVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cachingMode')) {
        obj['cachingMode'] = ApiClient.convertToType(data['cachingMode'], 'String');
      }
      if (data.hasOwnProperty('diskName')) {
        obj['diskName'] = ApiClient.convertToType(data['diskName'], 'String');
      }
      if (data.hasOwnProperty('diskURI')) {
        obj['diskURI'] = ApiClient.convertToType(data['diskURI'], 'String');
      }
      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Host Caching mode: None, Read Only, Read Write.
   * @member {String} cachingMode
   */
  exports.prototype['cachingMode'] = undefined;
  /**
   * The Name of the data disk in the blob storage
   * @member {String} diskName
   */
  exports.prototype['diskName'] = undefined;
  /**
   * The URI the data disk in the blob storage
   * @member {String} diskURI
   */
  exports.prototype['diskURI'] = undefined;
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;



  return exports;
}));


