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
    define(['ApiClient', 'model/V1APIVersions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V1APIVersions'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.CoreApi = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1APIVersions);
  }
}(this, function(ApiClient, V1APIVersions) {
  'use strict';

  /**
   * Core service.
   * @module api/CoreApi
   * @version v1.6.0
   */

  /**
   * Constructs a new CoreApi. 
   * @alias module:api/CoreApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCoreAPIVersions operation.
     * @callback module:api/CoreApi~getCoreAPIVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1APIVersions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available API versions
     * @param {module:api/CoreApi~getCoreAPIVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1APIVersions}
     */
    this.getCoreAPIVersions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1APIVersions;

      return this.apiClient.callApi(
        '/api/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
