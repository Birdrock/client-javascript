/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: unversioned
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
    define(['ApiClient', 'model/V1alpha1CertificateSigningRequest', 'model/V1DeleteOptions', 'model/UnversionedStatus', 'model/UnversionedAPIResourceList', 'model/V1alpha1CertificateSigningRequestList', 'model/UnversionedPatch', 'model/VersionedEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V1alpha1CertificateSigningRequest'), require('../model/V1DeleteOptions'), require('../model/UnversionedStatus'), require('../model/UnversionedAPIResourceList'), require('../model/V1alpha1CertificateSigningRequestList'), require('../model/UnversionedPatch'), require('../model/VersionedEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.CertificatesvalphaApi = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1alpha1CertificateSigningRequest, root.Kubernetes.V1DeleteOptions, root.Kubernetes.UnversionedStatus, root.Kubernetes.UnversionedAPIResourceList, root.Kubernetes.V1alpha1CertificateSigningRequestList, root.Kubernetes.UnversionedPatch, root.Kubernetes.VersionedEvent);
  }
}(this, function(ApiClient, V1alpha1CertificateSigningRequest, V1DeleteOptions, UnversionedStatus, UnversionedAPIResourceList, V1alpha1CertificateSigningRequestList, UnversionedPatch, VersionedEvent) {
  'use strict';

  /**
   * Certificatesvalpha service.
   * @module api/CertificatesvalphaApi
   * @version unversioned
   */

  /**
   * Constructs a new CertificatesvalphaApi. 
   * @alias module:api/CertificatesvalphaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~createCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a CertificateSigningRequest
     * @param {module:model/V1alpha1CertificateSigningRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/CertificatesvalphaApi~createCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequest}
     */
    this.createCertificatesV1alpha1CertificateSigningRequest = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createCertificatesV1alpha1CertificateSigningRequest";
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
      var returnType = V1alpha1CertificateSigningRequest;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~deleteCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnversionedStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a CertificateSigningRequest
     * @param {String} name name of the CertificateSigningRequest
     * @param {module:model/V1DeleteOptions} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Integer} opts.gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param {Boolean} opts.orphanDependents Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list.
     * @param {module:api/CertificatesvalphaApi~deleteCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnversionedStatus}
     */
    this.deleteCertificatesV1alpha1CertificateSigningRequest = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling deleteCertificatesV1alpha1CertificateSigningRequest";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling deleteCertificatesV1alpha1CertificateSigningRequest";
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'gracePeriodSeconds': opts['gracePeriodSeconds'],
        'orphanDependents': opts['orphanDependents']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = UnversionedStatus;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCertificatesV1alpha1CollectionCertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~deleteCertificatesV1alpha1CollectionCertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnversionedStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete collection of CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/CertificatesvalphaApi~deleteCertificatesV1alpha1CollectionCertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnversionedStatus}
     */
    this.deleteCertificatesV1alpha1CollectionCertificateSigningRequest = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = UnversionedStatus;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCertificatesV1alpha1APIResources operation.
     * @callback module:api/CertificatesvalphaApi~getCertificatesV1alpha1APIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnversionedAPIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:api/CertificatesvalphaApi~getCertificatesV1alpha1APIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnversionedAPIResourceList}
     */
    this.getCertificatesV1alpha1APIResources = function(callback) {
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
        '/apis/certificates.k8s.io/v1alpha1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~listCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequestList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/CertificatesvalphaApi~listCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequestList}
     */
    this.listCertificatesV1alpha1CertificateSigningRequest = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      var returnType = V1alpha1CertificateSigningRequestList;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~patchCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * partially update the specified CertificateSigningRequest
     * @param {String} name name of the CertificateSigningRequest
     * @param {module:model/UnversionedPatch} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/CertificatesvalphaApi~patchCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequest}
     */
    this.patchCertificatesV1alpha1CertificateSigningRequest = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling patchCertificatesV1alpha1CertificateSigningRequest";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling patchCertificatesV1alpha1CertificateSigningRequest";
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['application/json-patch+json', 'application/merge-patch+json', 'application/strategic-merge-patch+json'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1alpha1CertificateSigningRequest;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~readCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read the specified CertificateSigningRequest
     * @param {String} name name of the CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Boolean} opts.exact Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;
     * @param {Boolean} opts._export Should this value be exported.  Export strips fields that a user can not specify.
     * @param {module:api/CertificatesvalphaApi~readCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequest}
     */
    this.readCertificatesV1alpha1CertificateSigningRequest = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling readCertificatesV1alpha1CertificateSigningRequest";
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'pretty': opts['pretty'],
        'exact': opts['exact'],
        'export': opts['_export']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      var returnType = V1alpha1CertificateSigningRequest;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~replaceCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace the specified CertificateSigningRequest
     * @param {String} name name of the CertificateSigningRequest
     * @param {module:model/V1alpha1CertificateSigningRequest} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/CertificatesvalphaApi~replaceCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequest}
     */
    this.replaceCertificatesV1alpha1CertificateSigningRequest = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling replaceCertificatesV1alpha1CertificateSigningRequest";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling replaceCertificatesV1alpha1CertificateSigningRequest";
      }


      var pathParams = {
        'name': name
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
      var returnType = V1alpha1CertificateSigningRequest;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceCertificatesV1alpha1CertificateSigningRequestApproval operation.
     * @callback module:api/CertificatesvalphaApi~replaceCertificatesV1alpha1CertificateSigningRequestApprovalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace approval of the specified CertificateSigningRequest
     * @param {module:model/V1alpha1CertificateSigningRequest} body 
     * @param {String} name name of the CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/CertificatesvalphaApi~replaceCertificatesV1alpha1CertificateSigningRequestApprovalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequest}
     */
    this.replaceCertificatesV1alpha1CertificateSigningRequestApproval = function(body, name, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling replaceCertificatesV1alpha1CertificateSigningRequestApproval";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling replaceCertificatesV1alpha1CertificateSigningRequestApproval";
      }


      var pathParams = {
        'name': name
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
      var returnType = V1alpha1CertificateSigningRequest;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}/approval', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceCertificatesV1alpha1CertificateSigningRequestStatus operation.
     * @callback module:api/CertificatesvalphaApi~replaceCertificatesV1alpha1CertificateSigningRequestStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1alpha1CertificateSigningRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace status of the specified CertificateSigningRequest
     * @param {module:model/V1alpha1CertificateSigningRequest} body 
     * @param {String} name name of the CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/CertificatesvalphaApi~replaceCertificatesV1alpha1CertificateSigningRequestStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1alpha1CertificateSigningRequest}
     */
    this.replaceCertificatesV1alpha1CertificateSigningRequestStatus = function(body, name, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling replaceCertificatesV1alpha1CertificateSigningRequestStatus";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling replaceCertificatesV1alpha1CertificateSigningRequestStatus";
      }


      var pathParams = {
        'name': name
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
      var returnType = V1alpha1CertificateSigningRequest;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the watchCertificatesV1alpha1CertificateSigningRequest operation.
     * @callback module:api/CertificatesvalphaApi~watchCertificatesV1alpha1CertificateSigningRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionedEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * watch changes to an object of kind CertificateSigningRequest
     * @param {String} name name of the CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/CertificatesvalphaApi~watchCertificatesV1alpha1CertificateSigningRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionedEvent}
     */
    this.watchCertificatesV1alpha1CertificateSigningRequest = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling watchCertificatesV1alpha1CertificateSigningRequest";
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'pretty': opts['pretty'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      var returnType = VersionedEvent;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/watch/certificatesigningrequests/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the watchCertificatesV1alpha1CertificateSigningRequestList operation.
     * @callback module:api/CertificatesvalphaApi~watchCertificatesV1alpha1CertificateSigningRequestListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionedEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * watch individual changes to a list of CertificateSigningRequest
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/CertificatesvalphaApi~watchCertificatesV1alpha1CertificateSigningRequestListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionedEvent}
     */
    this.watchCertificatesV1alpha1CertificateSigningRequestList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'pretty': opts['pretty'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BearerToken'];
      var contentTypes = ['*_/_*'];
      var accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      var returnType = VersionedEvent;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/v1alpha1/watch/certificatesigningrequests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));