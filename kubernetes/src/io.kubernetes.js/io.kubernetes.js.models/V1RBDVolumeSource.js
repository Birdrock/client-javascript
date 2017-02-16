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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1LocalObjectReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1LocalObjectReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1RBDVolumeSource = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1LocalObjectReference);
  }
}(this, function(ApiClient, V1LocalObjectReference) {
  'use strict';




  /**
   * The V1RBDVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1RBDVolumeSource
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1RBDVolumeSource</code>.
   * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1RBDVolumeSource
   * @class
   * @param image {String} The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @param monitors {Array.<String>} A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   */
  var exports = function(image, monitors) {
    var _this = this;


    _this['image'] = image;

    _this['monitors'] = monitors;




  };

  /**
   * Constructs a <code>V1RBDVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1RBDVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1RBDVolumeSource} The populated <code>V1RBDVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('keyring')) {
        obj['keyring'] = ApiClient.convertToType(data['keyring'], 'String');
      }
      if (data.hasOwnProperty('monitors')) {
        obj['monitors'] = ApiClient.convertToType(data['monitors'], ['String']);
      }
      if (data.hasOwnProperty('pool')) {
        obj['pool'] = ApiClient.convertToType(data['pool'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('secretRef')) {
        obj['secretRef'] = V1LocalObjectReference.constructFromObject(data['secretRef']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
    }
    return obj;
  }

  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @member {String} keyring
   */
  exports.prototype['keyring'] = undefined;
  /**
   * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @member {Array.<String>} monitors
   */
  exports.prototype['monitors'] = undefined;
  /**
   * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
   * @member {String} pool
   */
  exports.prototype['pool'] = undefined;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1LocalObjectReference} secretRef
   */
  exports.prototype['secretRef'] = undefined;
  /**
   * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
   * @member {String} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


