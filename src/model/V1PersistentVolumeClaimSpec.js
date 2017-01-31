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
    define(['ApiClient', 'model/V1LabelSelector', 'model/V1ResourceRequirements'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LabelSelector'), require('./V1ResourceRequirements'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1PersistentVolumeClaimSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1LabelSelector, root.Kubernetes.V1ResourceRequirements);
  }
}(this, function(ApiClient, V1LabelSelector, V1ResourceRequirements) {
  'use strict';




  /**
   * The V1PersistentVolumeClaimSpec model module.
   * @module model/V1PersistentVolumeClaimSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1PersistentVolumeClaimSpec</code>.
   * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
   * @alias module:model/V1PersistentVolumeClaimSpec
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>V1PersistentVolumeClaimSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1PersistentVolumeClaimSpec} obj Optional instance to populate.
   * @return {module:model/V1PersistentVolumeClaimSpec} The populated <code>V1PersistentVolumeClaimSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessModes')) {
        obj['accessModes'] = ApiClient.convertToType(data['accessModes'], ['String']);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = V1ResourceRequirements.constructFromObject(data['resources']);
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
      }
      if (data.hasOwnProperty('volumeName')) {
        obj['volumeName'] = ApiClient.convertToType(data['volumeName'], 'String');
      }
    }
    return obj;
  }

  /**
   * AccessModes contains the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1
   * @member {Array.<String>} accessModes
   */
  exports.prototype['accessModes'] = undefined;
  /**
   * Resources represents the minimum resources the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#resources
   * @member {module:model/V1ResourceRequirements} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * A label query over volumes to consider for binding.
   * @member {module:model/V1LabelSelector} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * VolumeName is the binding reference to the PersistentVolume backing this claim.
   * @member {String} volumeName
   */
  exports.prototype['volumeName'] = undefined;



  return exports;
}));


