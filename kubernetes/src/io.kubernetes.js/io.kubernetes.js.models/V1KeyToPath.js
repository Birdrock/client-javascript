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
    root.KubernetesJsClient.V1KeyToPath = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1KeyToPath model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1KeyToPath</code>.
   * Maps a string key to a path within a volume.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath
   * @class
   * @param key {String} The key to project.
   * @param path {String} The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
   */
  var exports = function(key, path) {
    var _this = this;

    _this['key'] = key;

    _this['path'] = path;
  };

  /**
   * Constructs a <code>V1KeyToPath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath} The populated <code>V1KeyToPath</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
    }
    return obj;
  }

  /**
   * The key to project.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @member {Number} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;



  return exports;
}));

