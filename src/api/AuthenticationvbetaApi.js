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
    define(['ApiClient', 'model/V1beta1TokenReview', 'model/V1APIResourceList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V1beta1TokenReview'), require('../model/V1APIResourceList'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.AuthenticationvbetaApi = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1beta1TokenReview, root.Kubernetes.V1APIResourceList);
  }
}(this, function(ApiClient, V1beta1TokenReview, V1APIResourceList) {
  'use strict';

  /**
   * Authenticationvbeta service.
   * @module api/AuthenticationvbetaApi
   * @version v1.6.0
   */

  /**
   * Constructs a new AuthenticationvbetaApi. 
   * @alias module:api/AuthenticationvbetaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAuthenticationV1beta1TokenReview operation.
     * @callback module:api/AuthenticationvbetaApi~createAuthenticationV1beta1TokenReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1beta1TokenReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a TokenReview
     * @param {module:model/V1beta1TokenReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/AuthenticationvbetaApi~createAuthenticationV1beta1TokenReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1beta1TokenReview}
     */
    this.createAuthenticationV1beta1TokenReview = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createAuthenticationV1beta1TokenReview";
      }


      var pathParams = {
      };
      var queryParams = {
        'pretty': opts['pretty']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1beta1TokenReview;

      return this.apiClient.callApi(
        '/apis/authentication.k8s.io/v1beta1/tokenreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthenticationV1beta1APIResources operation.
     * @callback module:api/AuthenticationvbetaApi~getAuthenticationV1beta1APIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:api/AuthenticationvbetaApi~getAuthenticationV1beta1APIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1APIResourceList}
     */
    this.getAuthenticationV1beta1APIResources = function(callback) {
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
      var returnType = V1APIResourceList;

      return this.apiClient.callApi(
        '/apis/authentication.k8s.io/v1beta1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
