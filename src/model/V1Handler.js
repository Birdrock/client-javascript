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
    define(['ApiClient', 'model/V1ExecAction', 'model/V1HTTPGetAction', 'model/V1TCPSocketAction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ExecAction'), require('./V1HTTPGetAction'), require('./V1TCPSocketAction'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1Handler = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1ExecAction, root.Kubernetes.V1HTTPGetAction, root.Kubernetes.V1TCPSocketAction);
  }
}(this, function(ApiClient, V1ExecAction, V1HTTPGetAction, V1TCPSocketAction) {
  'use strict';




  /**
   * The V1Handler model module.
   * @module model/V1Handler
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1Handler</code>.
   * Handler defines a specific action that should be taken
   * @alias module:model/V1Handler
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1Handler</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Handler} obj Optional instance to populate.
   * @return {module:model/V1Handler} The populated <code>V1Handler</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('exec')) {
        obj['exec'] = V1ExecAction.constructFromObject(data['exec']);
      }
      if (data.hasOwnProperty('httpGet')) {
        obj['httpGet'] = V1HTTPGetAction.constructFromObject(data['httpGet']);
      }
      if (data.hasOwnProperty('tcpSocket')) {
        obj['tcpSocket'] = V1TCPSocketAction.constructFromObject(data['tcpSocket']);
      }
    }
    return obj;
  }

  /**
   * One and only one of the following should be specified. Exec specifies the action to take.
   * @member {module:model/V1ExecAction} exec
   */
  exports.prototype['exec'] = undefined;
  /**
   * HTTPGet specifies the http request to perform.
   * @member {module:model/V1HTTPGetAction} httpGet
   */
  exports.prototype['httpGet'] = undefined;
  /**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
   * @member {module:model/V1TCPSocketAction} tcpSocket
   */
  exports.prototype['tcpSocket'] = undefined;



  return exports;
}));


