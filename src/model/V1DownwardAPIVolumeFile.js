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
    define(['ApiClient', 'model/V1ObjectFieldSelector', 'model/V1ResourceFieldSelector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ObjectFieldSelector'), require('./V1ResourceFieldSelector'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1DownwardAPIVolumeFile = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1ObjectFieldSelector, root.Kubernetes.V1ResourceFieldSelector);
  }
}(this, function(ApiClient, V1ObjectFieldSelector, V1ResourceFieldSelector) {
  'use strict';




  /**
   * The V1DownwardAPIVolumeFile model module.
   * @module model/V1DownwardAPIVolumeFile
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1DownwardAPIVolumeFile</code>.
   * DownwardAPIVolumeFile represents information to create the file containing the pod field
   * @alias module:model/V1DownwardAPIVolumeFile
   * @class
   * @param path {String} Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
   */
  var exports = function(path) {
    var _this = this;



    _this['path'] = path;

  };

  /**
   * Constructs a <code>V1DownwardAPIVolumeFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1DownwardAPIVolumeFile} obj Optional instance to populate.
   * @return {module:model/V1DownwardAPIVolumeFile} The populated <code>V1DownwardAPIVolumeFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fieldRef')) {
        obj['fieldRef'] = V1ObjectFieldSelector.constructFromObject(data['fieldRef']);
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'Integer');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('resourceFieldRef')) {
        obj['resourceFieldRef'] = V1ResourceFieldSelector.constructFromObject(data['resourceFieldRef']);
      }
    }
    return obj;
  }

  /**
   * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
   * @member {module:model/V1ObjectFieldSelector} fieldRef
   */
  exports.prototype['fieldRef'] = undefined;
  /**
   * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @member {Integer} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
   * @member {module:model/V1ResourceFieldSelector} resourceFieldRef
   */
  exports.prototype['resourceFieldRef'] = undefined;



  return exports;
}));

