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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1ServerAddressByClientCIDR = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1ServerAddressByClientCIDR model module.
   * @module model/V1ServerAddressByClientCIDR
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1ServerAddressByClientCIDR</code>.
   * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
   * @alias module:model/V1ServerAddressByClientCIDR
   * @class
   * @param clientCIDR {String} The CIDR with which clients can match their IP to figure out the server address that they should use.
   * @param serverAddress {String} Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
   */
  var exports = function(clientCIDR, serverAddress) {
    var _this = this;

    _this['clientCIDR'] = clientCIDR;
    _this['serverAddress'] = serverAddress;
  };

  /**
   * Constructs a <code>V1ServerAddressByClientCIDR</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1ServerAddressByClientCIDR} obj Optional instance to populate.
   * @return {module:model/V1ServerAddressByClientCIDR} The populated <code>V1ServerAddressByClientCIDR</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientCIDR')) {
        obj['clientCIDR'] = ApiClient.convertToType(data['clientCIDR'], 'String');
      }
      if (data.hasOwnProperty('serverAddress')) {
        obj['serverAddress'] = ApiClient.convertToType(data['serverAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * The CIDR with which clients can match their IP to figure out the server address that they should use.
   * @member {String} clientCIDR
   */
  exports.prototype['clientCIDR'] = undefined;
  /**
   * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
   * @member {String} serverAddress
   */
  exports.prototype['serverAddress'] = undefined;



  return exports;
}));

