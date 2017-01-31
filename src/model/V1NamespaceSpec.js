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
    root.Kubernetes.V1NamespaceSpec = factory(root.Kubernetes.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1NamespaceSpec model module.
   * @module model/V1NamespaceSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1NamespaceSpec</code>.
   * NamespaceSpec describes the attributes on a Namespace.
   * @alias module:model/V1NamespaceSpec
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V1NamespaceSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1NamespaceSpec} obj Optional instance to populate.
   * @return {module:model/V1NamespaceSpec} The populated <code>V1NamespaceSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('finalizers')) {
        obj['finalizers'] = ApiClient.convertToType(data['finalizers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: http://releases.k8s.io/HEAD/docs/design/namespaces.md#finalizers
   * @member {Array.<String>} finalizers
   */
  exports.prototype['finalizers'] = undefined;



  return exports;
}));


