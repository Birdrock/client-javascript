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
    root.Kubernetes.V1PersistentVolumeClaimVolumeSource = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1PersistentVolumeClaimVolumeSource model module.
   * @module model/V1PersistentVolumeClaimVolumeSource
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1PersistentVolumeClaimVolumeSource</code>.
   * PersistentVolumeClaimVolumeSource references the user&#39;s PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
   * @alias module:model/V1PersistentVolumeClaimVolumeSource
   * @class
   * @param claimName {String} ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#persistentvolumeclaims
   */
  var exports = function(claimName) {
    var _this = this;

    _this['claimName'] = claimName;

  };

  /**
   * Constructs a <code>V1PersistentVolumeClaimVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1PersistentVolumeClaimVolumeSource} obj Optional instance to populate.
   * @return {module:model/V1PersistentVolumeClaimVolumeSource} The populated <code>V1PersistentVolumeClaimVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('claimName')) {
        obj['claimName'] = ApiClient.convertToType(data['claimName'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#persistentvolumeclaims
   * @member {String} claimName
   */
  exports.prototype['claimName'] = undefined;
  /**
   * Will force the ReadOnly setting in VolumeMounts. Default false.
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;



  return exports;
}));

