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
    define(['ApiClient', 'model/IntstrIntOrString'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntstrIntOrString'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1TCPSocketAction = factory(root.Kubernetes.ApiClient, root.Kubernetes.IntstrIntOrString);
  }
}(this, function(ApiClient, IntstrIntOrString) {
  'use strict';




  /**
   * The V1TCPSocketAction model module.
   * @module model/V1TCPSocketAction
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1TCPSocketAction</code>.
   * TCPSocketAction describes an action based on opening a socket
   * @alias module:model/V1TCPSocketAction
   * @class
   * @param port {module:model/IntstrIntOrString} Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
  var exports = function(port) {
    var _this = this;

    _this['port'] = port;
  };

  /**
   * Constructs a <code>V1TCPSocketAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1TCPSocketAction} obj Optional instance to populate.
   * @return {module:model/V1TCPSocketAction} The populated <code>V1TCPSocketAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('port')) {
        obj['port'] = IntstrIntOrString.constructFromObject(data['port']);
      }
    }
    return obj;
  }

  /**
   * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   * @member {module:model/IntstrIntOrString} port
   */
  exports.prototype['port'] = undefined;



  return exports;
}));


