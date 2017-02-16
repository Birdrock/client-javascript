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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ContainerState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ContainerState'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ContainerStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ContainerState);
  }
}(this, function(ApiClient, V1ContainerState) {
  'use strict';




  /**
   * The V1ContainerStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ContainerStatus
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1ContainerStatus</code>.
   * ContainerStatus contains details for the current status of this container.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStatus
   * @class
   * @param image {String} The image the container is running. More info: http://kubernetes.io/docs/user-guide/images
   * @param imageID {String} ImageID of the container's image.
   * @param name {String} This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
   * @param ready {Boolean} Specifies whether the container has passed its readiness probe.
   * @param restartCount {Number} The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
   */
  var exports = function(image, imageID, name, ready, restartCount) {
    var _this = this;


    _this['image'] = image;
    _this['imageID'] = imageID;

    _this['name'] = name;
    _this['ready'] = ready;
    _this['restartCount'] = restartCount;

  };

  /**
   * Constructs a <code>V1ContainerStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStatus} The populated <code>V1ContainerStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('containerID')) {
        obj['containerID'] = ApiClient.convertToType(data['containerID'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('imageID')) {
        obj['imageID'] = ApiClient.convertToType(data['imageID'], 'String');
      }
      if (data.hasOwnProperty('lastState')) {
        obj['lastState'] = V1ContainerState.constructFromObject(data['lastState']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ready')) {
        obj['ready'] = ApiClient.convertToType(data['ready'], 'Boolean');
      }
      if (data.hasOwnProperty('restartCount')) {
        obj['restartCount'] = ApiClient.convertToType(data['restartCount'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = V1ContainerState.constructFromObject(data['state']);
      }
    }
    return obj;
  }

  /**
   * Container's ID in the format 'docker://<container_id>'. More info: http://kubernetes.io/docs/user-guide/container-environment#container-information
   * @member {String} containerID
   */
  exports.prototype['containerID'] = undefined;
  /**
   * The image the container is running. More info: http://kubernetes.io/docs/user-guide/images
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * ImageID of the container's image.
   * @member {String} imageID
   */
  exports.prototype['imageID'] = undefined;
  /**
   * Details about the container's last termination condition.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerState} lastState
   */
  exports.prototype['lastState'] = undefined;
  /**
   * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specifies whether the container has passed its readiness probe.
   * @member {Boolean} ready
   */
  exports.prototype['ready'] = undefined;
  /**
   * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
   * @member {Number} restartCount
   */
  exports.prototype['restartCount'] = undefined;
  /**
   * Details about the container's current condition.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerState} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));

