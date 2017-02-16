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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1Capabilities', 'io.kubernetes.js/io.kubernetes.js.models/V1SELinuxOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Capabilities'), require('./V1SELinuxOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1SecurityContext = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1Capabilities, root.KubernetesJsClient.V1SELinuxOptions);
  }
}(this, function(ApiClient, V1Capabilities, V1SELinuxOptions) {
  'use strict';




  /**
   * The V1SecurityContext model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1SecurityContext
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1SecurityContext</code>.
   * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1SecurityContext
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V1SecurityContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1SecurityContext} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1SecurityContext} The populated <code>V1SecurityContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = V1Capabilities.constructFromObject(data['capabilities']);
      }
      if (data.hasOwnProperty('privileged')) {
        obj['privileged'] = ApiClient.convertToType(data['privileged'], 'Boolean');
      }
      if (data.hasOwnProperty('readOnlyRootFilesystem')) {
        obj['readOnlyRootFilesystem'] = ApiClient.convertToType(data['readOnlyRootFilesystem'], 'Boolean');
      }
      if (data.hasOwnProperty('runAsNonRoot')) {
        obj['runAsNonRoot'] = ApiClient.convertToType(data['runAsNonRoot'], 'Boolean');
      }
      if (data.hasOwnProperty('runAsUser')) {
        obj['runAsUser'] = ApiClient.convertToType(data['runAsUser'], 'Number');
      }
      if (data.hasOwnProperty('seLinuxOptions')) {
        obj['seLinuxOptions'] = V1SELinuxOptions.constructFromObject(data['seLinuxOptions']);
      }
    }
    return obj;
  }

  /**
   * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1Capabilities} capabilities
   */
  exports.prototype['capabilities'] = undefined;
  /**
   * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
   * @member {Boolean} privileged
   */
  exports.prototype['privileged'] = undefined;
  /**
   * Whether this container has a read-only root filesystem. Default is false.
   * @member {Boolean} readOnlyRootFilesystem
   */
  exports.prototype['readOnlyRootFilesystem'] = undefined;
  /**
   * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @member {Boolean} runAsNonRoot
   */
  exports.prototype['runAsNonRoot'] = undefined;
  /**
   * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @member {Number} runAsUser
   */
  exports.prototype['runAsUser'] = undefined;
  /**
   * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1SELinuxOptions} seLinuxOptions
   */
  exports.prototype['seLinuxOptions'] = undefined;



  return exports;
}));


