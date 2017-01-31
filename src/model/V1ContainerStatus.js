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
    define(['ApiClient', 'model/V1ContainerState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ContainerState'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1ContainerStatus = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1ContainerState);
  }
}(this, function(ApiClient, V1ContainerState) {
  'use strict';




  /**
   * The V1ContainerStatus model module.
   * @module model/V1ContainerStatus
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1ContainerStatus</code>.
   * ContainerStatus contains details for the current status of this container.
   * @alias module:model/V1ContainerStatus
   * @class
   * @param image {String} The image the container is running. More info: http://kubernetes.io/docs/user-guide/images
   * @param imageID {String} ImageID of the container's image.
   * @param name {String} This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
   * @param ready {Boolean} Specifies whether the container has passed its readiness probe.
   * @param restartCount {Integer} The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
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
   * @param {module:model/V1ContainerStatus} obj Optional instance to populate.
   * @return {module:model/V1ContainerStatus} The populated <code>V1ContainerStatus</code> instance.
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
        obj['restartCount'] = ApiClient.convertToType(data['restartCount'], 'Integer');
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
   * @member {module:model/V1ContainerState} lastState
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
   * @member {Integer} restartCount
   */
  exports.prototype['restartCount'] = undefined;
  /**
   * Details about the container's current condition.
   * @member {module:model/V1ContainerState} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));


