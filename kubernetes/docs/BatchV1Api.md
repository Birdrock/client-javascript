# KubernetesJsClient.BatchV1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNamespacedJob**](BatchV1Api.md#createNamespacedJob) | **POST** /apis/batch/v1/namespaces/{namespace}/jobs | 
[**deleteCollectionNamespacedJob**](BatchV1Api.md#deleteCollectionNamespacedJob) | **DELETE** /apis/batch/v1/namespaces/{namespace}/jobs | 
[**deleteNamespacedJob**](BatchV1Api.md#deleteNamespacedJob) | **DELETE** /apis/batch/v1/namespaces/{namespace}/jobs/{name} | 
[**getAPIResources**](BatchV1Api.md#getAPIResources) | **GET** /apis/batch/v1/ | 
[**listJobForAllNamespaces**](BatchV1Api.md#listJobForAllNamespaces) | **GET** /apis/batch/v1/jobs | 
[**listNamespacedJob**](BatchV1Api.md#listNamespacedJob) | **GET** /apis/batch/v1/namespaces/{namespace}/jobs | 
[**patchNamespacedJob**](BatchV1Api.md#patchNamespacedJob) | **PATCH** /apis/batch/v1/namespaces/{namespace}/jobs/{name} | 
[**patchNamespacedJobStatus**](BatchV1Api.md#patchNamespacedJobStatus) | **PATCH** /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status | 
[**readNamespacedJob**](BatchV1Api.md#readNamespacedJob) | **GET** /apis/batch/v1/namespaces/{namespace}/jobs/{name} | 
[**readNamespacedJobStatus**](BatchV1Api.md#readNamespacedJobStatus) | **GET** /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status | 
[**replaceNamespacedJob**](BatchV1Api.md#replaceNamespacedJob) | **PUT** /apis/batch/v1/namespaces/{namespace}/jobs/{name} | 
[**replaceNamespacedJobStatus**](BatchV1Api.md#replaceNamespacedJobStatus) | **PUT** /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status | 


<a name="createNamespacedJob"></a>
# **createNamespacedJob**
> V1Job createNamespacedJob(namespacebody, opts)



create a Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new KubernetesJsClient.V1Job(); // V1Job | 

var opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNamespacedJob(namespacebody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1Job**](V1Job.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteCollectionNamespacedJob"></a>
# **deleteCollectionNamespacedJob**
> UnversionedStatus deleteCollectionNamespacedJob(namespace, opts)



delete collection of Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCollectionNamespacedJob(namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**UnversionedStatus**](UnversionedStatus.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteNamespacedJob"></a>
# **deleteNamespacedJob**
> UnversionedStatus deleteNamespacedJob(name, namespace, body, opts)



delete a Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new KubernetesJsClient.V1DeleteOptions(); // V1DeleteOptions | 

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true // Boolean | Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNamespacedJob(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1DeleteOptions**](V1DeleteOptions.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **gracePeriodSeconds** | **Number**| The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | [optional] 
 **orphanDependents** | **Boolean**| Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. | [optional] 

### Return type

[**UnversionedStatus**](UnversionedStatus.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getAPIResources"></a>
# **getAPIResources**
> UnversionedAPIResourceList getAPIResources()



get available resources

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAPIResources(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UnversionedAPIResourceList**](UnversionedAPIResourceList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json, application/yaml, application/vnd.kubernetes.protobuf
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="listJobForAllNamespaces"></a>
# **listJobForAllNamespaces**
> V1JobList listJobForAllNamespaces(opts)



list or watch objects of kind Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listJobForAllNamespaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1JobList**](V1JobList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="listNamespacedJob"></a>
# **listNamespacedJob**
> V1JobList listNamespacedJob(namespace, opts)



list or watch objects of kind Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listNamespacedJob(namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1JobList**](V1JobList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchNamespacedJob"></a>
# **patchNamespacedJob**
> V1Job patchNamespacedJob(name, namespace, body, opts)



partially update the specified Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new KubernetesJsClient.UnversionedPatch(); // UnversionedPatch | 

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchNamespacedJob(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**UnversionedPatch**](UnversionedPatch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchNamespacedJobStatus"></a>
# **patchNamespacedJobStatus**
> V1Job patchNamespacedJobStatus(name, namespace, body, opts)



partially update status of the specified Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new KubernetesJsClient.UnversionedPatch(); // UnversionedPatch | 

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchNamespacedJobStatus(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**UnversionedPatch**](UnversionedPatch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readNamespacedJob"></a>
# **readNamespacedJob**
> V1Job readNamespacedJob(name, namespace, , opts)



read the specified Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'exact': true, // Boolean | Should the export be exact.  Exact export maintains cluster-specific fields like 'Namespace'
  '_export': true // Boolean | Should this value be exported.  Export strips fields that a user can not specify.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readNamespacedJob(name, namespace, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39; | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readNamespacedJobStatus"></a>
# **readNamespacedJobStatus**
> V1Job readNamespacedJobStatus(name, namespace, , opts)



read status of the specified Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readNamespacedJobStatus(name, namespace, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceNamespacedJob"></a>
# **replaceNamespacedJob**
> V1Job replaceNamespacedJob(name, namespace, body, opts)



replace the specified Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new KubernetesJsClient.V1Job(); // V1Job | 

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.replaceNamespacedJob(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1Job**](V1Job.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceNamespacedJobStatus"></a>
# **replaceNamespacedJobStatus**
> V1Job replaceNamespacedJobStatus(name, namespace, body, opts)



replace status of the specified Job

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.BatchV1Api();

var name = "name_example"; // String | name of the Job

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new KubernetesJsClient.V1Job(); // V1Job | 

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.replaceNamespacedJobStatus(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Job | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1Job**](V1Job.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1Job**](V1Job.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

