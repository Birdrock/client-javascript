/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.5.1-660c2a2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1CinderVolumeSource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1CinderVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1CinderVolumeSource
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1CinderVolumeSource</code>.
   * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1CinderVolumeSource
   * @class
   * @param volumeID {String} volume id used to identify the volume in cinder More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   */
  var exports = function(volumeID) {
    var _this = this;



    _this['volumeID'] = volumeID;
  };

  /**
   * Constructs a <code>V1CinderVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1CinderVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1CinderVolumeSource} The populated <code>V1CinderVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('volumeID')) {
        obj['volumeID'] = ApiClient.convertToType(data['volumeID'], 'String');
      }
    }
    return obj;
  }

  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * volume id used to identify the volume in cinder More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @member {String} volumeID
   */
  exports.prototype['volumeID'] = undefined;



  return exports;
}));


