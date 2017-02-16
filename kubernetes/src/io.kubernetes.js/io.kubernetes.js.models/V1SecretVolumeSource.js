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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1KeyToPath'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1SecretVolumeSource = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1KeyToPath);
  }
}(this, function(ApiClient, V1KeyToPath) {
  'use strict';




  /**
   * The V1SecretVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1SecretVolumeSource
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1SecretVolumeSource</code>.
   * Adapts a Secret into a volume.  The contents of the target Secret&#39;s Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1SecretVolumeSource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1SecretVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1SecretVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1SecretVolumeSource} The populated <code>V1SecretVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defaultMode')) {
        obj['defaultMode'] = ApiClient.convertToType(data['defaultMode'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [V1KeyToPath]);
      }
      if (data.hasOwnProperty('secretName')) {
        obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @member {Number} defaultMode
   */
  exports.prototype['defaultMode'] = undefined;
  /**
   * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error. Paths must be relative and may not contain the '..' path or start with '..'.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
   * @member {String} secretName
   */
  exports.prototype['secretName'] = undefined;



  return exports;
}));

