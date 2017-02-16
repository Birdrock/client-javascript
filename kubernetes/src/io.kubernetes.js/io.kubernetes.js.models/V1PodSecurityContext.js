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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1SELinuxOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1SELinuxOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1PodSecurityContext = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1SELinuxOptions);
  }
}(this, function(ApiClient, V1SELinuxOptions) {
  'use strict';




  /**
   * The V1PodSecurityContext model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1PodSecurityContext
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1PodSecurityContext</code>.
   * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1PodSecurityContext
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V1PodSecurityContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1PodSecurityContext} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1PodSecurityContext} The populated <code>V1PodSecurityContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsGroup')) {
        obj['fsGroup'] = ApiClient.convertToType(data['fsGroup'], 'Number');
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
      if (data.hasOwnProperty('supplementalGroups')) {
        obj['supplementalGroups'] = ApiClient.convertToType(data['supplementalGroups'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume.
   * @member {Number} fsGroup
   */
  exports.prototype['fsGroup'] = undefined;
  /**
   * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @member {Boolean} runAsNonRoot
   */
  exports.prototype['runAsNonRoot'] = undefined;
  /**
   * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   * @member {Number} runAsUser
   */
  exports.prototype['runAsUser'] = undefined;
  /**
   * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1SELinuxOptions} seLinuxOptions
   */
  exports.prototype['seLinuxOptions'] = undefined;
  /**
   * A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.
   * @member {Array.<Number>} supplementalGroups
   */
  exports.prototype['supplementalGroups'] = undefined;



  return exports;
}));

