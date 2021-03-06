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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResourceList', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1TokenReview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../io.kubernetes.js.models/UnversionedAPIResourceList'), require('../io.kubernetes.js.models/V1beta1TokenReview'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.AuthenticationV1beta1Api = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.UnversionedAPIResourceList, root.KubernetesJsClient.V1beta1TokenReview);
  }
}(this, function(ApiClient, UnversionedAPIResourceList, V1beta1TokenReview) {
  'use strict';

  /**
   * AuthenticationV1beta1 service.
   * @module io.kubernetes.js/io.kubernetes.js.apis/AuthenticationV1beta1Api
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new AuthenticationV1beta1Api. 
   * @alias module:io.kubernetes.js/io.kubernetes.js.apis/AuthenticationV1beta1Api
   * @class
   * @param {module:io.kubernetes.js/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:io.kubernetes.js/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTokenReview operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/AuthenticationV1beta1Api~createTokenReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1TokenReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a TokenReview
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1TokenReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/AuthenticationV1beta1Api~createTokenReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/V1beta1TokenReview}
     */
    this.createTokenReview = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createTokenReview");
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
      var contentTypes = ['*/*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1beta1TokenReview;

      return this.apiClient.callApi(
        '/apis/authentication.k8s.io/v1beta1/tokenreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIResources operation.
     * @callback module:io.kubernetes.js/io.kubernetes.js.apis/AuthenticationV1beta1Api~getAPIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:io.kubernetes.js/io.kubernetes.js.apis/AuthenticationV1beta1Api~getAPIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResourceList}
     */
    this.getAPIResources = function(callback) {
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
      var returnType = UnversionedAPIResourceList;

      return this.apiClient.callApi(
        '/apis/authentication.k8s.io/v1beta1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
