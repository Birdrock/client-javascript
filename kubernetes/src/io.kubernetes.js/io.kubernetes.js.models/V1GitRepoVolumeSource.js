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
    root.KubernetesJsClient.V1GitRepoVolumeSource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1GitRepoVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1GitRepoVolumeSource
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1GitRepoVolumeSource</code>.
   * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1GitRepoVolumeSource
   * @class
   * @param repository {String} Repository URL
   */
  var exports = function(repository) {
    var _this = this;


    _this['repository'] = repository;

  };

  /**
   * Constructs a <code>V1GitRepoVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1GitRepoVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1GitRepoVolumeSource} The populated <code>V1GitRepoVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('directory')) {
        obj['directory'] = ApiClient.convertToType(data['directory'], 'String');
      }
      if (data.hasOwnProperty('repository')) {
        obj['repository'] = ApiClient.convertToType(data['repository'], 'String');
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = ApiClient.convertToType(data['revision'], 'String');
      }
    }
    return obj;
  }

  /**
   * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
   * @member {String} directory
   */
  exports.prototype['directory'] = undefined;
  /**
   * Repository URL
   * @member {String} repository
   */
  exports.prototype['repository'] = undefined;
  /**
   * Commit hash for the specified revision.
   * @member {String} revision
   */
  exports.prototype['revision'] = undefined;



  return exports;
}));


