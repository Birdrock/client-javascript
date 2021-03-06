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
    root.KubernetesJsClient.V1CephFSVolumeSource = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1LocalObjectReference);
  }
}(this, function(ApiClient, V1LocalObjectReference) {
  'use strict';




  /**
   * The V1CephFSVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1CephFSVolumeSource
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1CephFSVolumeSource</code>.
   * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1CephFSVolumeSource
   * @class
   * @param monitors {Array.<String>} Required: Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   */
  var exports = function(monitors) {
    var _this = this;

    _this['monitors'] = monitors;





  };

  /**
   * Constructs a <code>V1CephFSVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1CephFSVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1CephFSVolumeSource} The populated <code>V1CephFSVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('monitors')) {
        obj['monitors'] = ApiClient.convertToType(data['monitors'], ['String']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('secretFile')) {
        obj['secretFile'] = ApiClient.convertToType(data['secretFile'], 'String');
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
   * Required: Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @member {Array.<String>} monitors
   */
  exports.prototype['monitors'] = undefined;
  /**
   * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @member {String} secretFile
   */
  exports.prototype['secretFile'] = undefined;
  /**
   * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1LocalObjectReference} secretRef
   */
  exports.prototype['secretRef'] = undefined;
  /**
   * Optional: User is the rados user name, default is admin More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @member {String} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


