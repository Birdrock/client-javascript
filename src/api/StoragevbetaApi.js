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
    define(['ApiClient', 'model/V1beta1StorageClass', 'model/UnversionedStatus', 'model/V1DeleteOptions', 'model/UnversionedAPIResourceList', 'model/V1beta1StorageClassList', 'model/UnversionedPatch', 'model/VersionedEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/V1beta1StorageClass'), require('../model/UnversionedStatus'), require('../model/V1DeleteOptions'), require('../model/UnversionedAPIResourceList'), require('../model/V1beta1StorageClassList'), require('../model/UnversionedPatch'), require('../model/VersionedEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.StoragevbetaApi = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1beta1StorageClass, root.Kubernetes.UnversionedStatus, root.Kubernetes.V1DeleteOptions, root.Kubernetes.UnversionedAPIResourceList, root.Kubernetes.V1beta1StorageClassList, root.Kubernetes.UnversionedPatch, root.Kubernetes.VersionedEvent);
  }
}(this, function(ApiClient, V1beta1StorageClass, UnversionedStatus, V1DeleteOptions, UnversionedAPIResourceList, V1beta1StorageClassList, UnversionedPatch, VersionedEvent) {
  'use strict';

  /**
   * Storagevbeta service.
   * @module api/StoragevbetaApi
   * @version unversioned
   */

  /**
   * Constructs a new StoragevbetaApi. 
   * @alias module:api/StoragevbetaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~createStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1beta1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a StorageClass
     * @param {module:model/V1beta1StorageClass} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/StoragevbetaApi~createStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1beta1StorageClass}
     */
    this.createStorageV1beta1StorageClass = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createStorageV1beta1StorageClass";
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
      var returnType = V1beta1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1beta1/storageclasses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStorageV1beta1CollectionStorageClass operation.
     * @callback module:api/StoragevbetaApi~deleteStorageV1beta1CollectionStorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnversionedStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete collection of StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/StoragevbetaApi~deleteStorageV1beta1CollectionStorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnversionedStatus}
     */
    this.deleteStorageV1beta1CollectionStorageClass = function(opts, callback) {
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
        '/apis/storage.k8s.io/v1beta1/storageclasses', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~deleteStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnversionedStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a StorageClass
     * @param {String} name name of the StorageClass
     * @param {module:model/V1DeleteOptions} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Integer} opts.gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param {Boolean} opts.orphanDependents Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list.
     * @param {module:api/StoragevbetaApi~deleteStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnversionedStatus}
     */
    this.deleteStorageV1beta1StorageClass = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling deleteStorageV1beta1StorageClass";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling deleteStorageV1beta1StorageClass";
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
        '/apis/storage.k8s.io/v1beta1/storageclasses/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorageV1beta1APIResources operation.
     * @callback module:api/StoragevbetaApi~getStorageV1beta1APIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnversionedAPIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:api/StoragevbetaApi~getStorageV1beta1APIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnversionedAPIResourceList}
     */
    this.getStorageV1beta1APIResources = function(callback) {
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
        '/apis/storage.k8s.io/v1beta1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~listStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1beta1StorageClassList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/StoragevbetaApi~listStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1beta1StorageClassList}
     */
    this.listStorageV1beta1StorageClass = function(opts, callback) {
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
      var returnType = V1beta1StorageClassList;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1beta1/storageclasses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~patchStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1beta1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * partially update the specified StorageClass
     * @param {String} name name of the StorageClass
     * @param {module:model/UnversionedPatch} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/StoragevbetaApi~patchStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1beta1StorageClass}
     */
    this.patchStorageV1beta1StorageClass = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling patchStorageV1beta1StorageClass";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling patchStorageV1beta1StorageClass";
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
      var returnType = V1beta1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1beta1/storageclasses/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~readStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1beta1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read the specified StorageClass
     * @param {String} name name of the StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Boolean} opts.exact Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;
     * @param {Boolean} opts._export Should this value be exported.  Export strips fields that a user can not specify.
     * @param {module:api/StoragevbetaApi~readStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1beta1StorageClass}
     */
    this.readStorageV1beta1StorageClass = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling readStorageV1beta1StorageClass";
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
      var returnType = V1beta1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1beta1/storageclasses/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~replaceStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1beta1StorageClass} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace the specified StorageClass
     * @param {String} name name of the StorageClass
     * @param {module:model/V1beta1StorageClass} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:api/StoragevbetaApi~replaceStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1beta1StorageClass}
     */
    this.replaceStorageV1beta1StorageClass = function(name, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling replaceStorageV1beta1StorageClass";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling replaceStorageV1beta1StorageClass";
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
      var returnType = V1beta1StorageClass;

      return this.apiClient.callApi(
        '/apis/storage.k8s.io/v1beta1/storageclasses/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the watchStorageV1beta1StorageClass operation.
     * @callback module:api/StoragevbetaApi~watchStorageV1beta1StorageClassCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionedEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * watch changes to an object of kind StorageClass
     * @param {String} name name of the StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/StoragevbetaApi~watchStorageV1beta1StorageClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionedEvent}
     */
    this.watchStorageV1beta1StorageClass = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling watchStorageV1beta1StorageClass";
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
        '/apis/storage.k8s.io/v1beta1/watch/storageclasses/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the watchStorageV1beta1StorageClassList operation.
     * @callback module:api/StoragevbetaApi~watchStorageV1beta1StorageClassListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionedEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * watch individual changes to a list of StorageClass
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param {Integer} opts.timeoutSeconds Timeout for the list/watch call.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:api/StoragevbetaApi~watchStorageV1beta1StorageClassListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionedEvent}
     */
    this.watchStorageV1beta1StorageClassList = function(opts, callback) {
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
        '/apis/storage.k8s.io/v1beta1/watch/storageclasses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
