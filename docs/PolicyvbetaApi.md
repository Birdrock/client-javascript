# Kubernetes.PolicyvbetaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#createPolicyV1beta1NamespacedPodDisruptionBudget) | **POST** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets | 
[**deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget**](PolicyvbetaApi.md#deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget) | **DELETE** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets | 
[**deletePolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#deletePolicyV1beta1NamespacedPodDisruptionBudget) | **DELETE** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name} | 
[**getPolicyV1beta1APIResources**](PolicyvbetaApi.md#getPolicyV1beta1APIResources) | **GET** /apis/policy/v1beta1/ | 
[**listPolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#listPolicyV1beta1NamespacedPodDisruptionBudget) | **GET** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets | 
[**listPolicyV1beta1PodDisruptionBudgetForAllNamespaces**](PolicyvbetaApi.md#listPolicyV1beta1PodDisruptionBudgetForAllNamespaces) | **GET** /apis/policy/v1beta1/poddisruptionbudgets | 
[**patchPolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#patchPolicyV1beta1NamespacedPodDisruptionBudget) | **PATCH** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name} | 
[**patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus**](PolicyvbetaApi.md#patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus) | **PATCH** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status | 
[**readPolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#readPolicyV1beta1NamespacedPodDisruptionBudget) | **GET** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name} | 
[**readPolicyV1beta1NamespacedPodDisruptionBudgetStatus**](PolicyvbetaApi.md#readPolicyV1beta1NamespacedPodDisruptionBudgetStatus) | **GET** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status | 
[**replacePolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#replacePolicyV1beta1NamespacedPodDisruptionBudget) | **PUT** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name} | 
[**replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus**](PolicyvbetaApi.md#replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus) | **PUT** /apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status | 
[**watchPolicyV1beta1NamespacedPodDisruptionBudget**](PolicyvbetaApi.md#watchPolicyV1beta1NamespacedPodDisruptionBudget) | **GET** /apis/policy/v1beta1/watch/namespaces/{namespace}/poddisruptionbudgets/{name} | 
[**watchPolicyV1beta1NamespacedPodDisruptionBudgetList**](PolicyvbetaApi.md#watchPolicyV1beta1NamespacedPodDisruptionBudgetList) | **GET** /apis/policy/v1beta1/watch/namespaces/{namespace}/poddisruptionbudgets | 
[**watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces**](PolicyvbetaApi.md#watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces) | **GET** /apis/policy/v1beta1/watch/poddisruptionbudgets | 


<a name="createPolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **createPolicyV1beta1NamespacedPodDisruptionBudget**
> V1beta1PodDisruptionBudget createPolicyV1beta1NamespacedPodDisruptionBudget(namespacebody, opts)



create a PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new Kubernetes.V1beta1PodDisruptionBudget(); // V1beta1PodDisruptionBudget | 

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
apiInstance.createPolicyV1beta1NamespacedPodDisruptionBudget(namespacebody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget"></a>
# **deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget**
> V1Status deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget(namespace, opts)



delete collection of PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Integer | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget(namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1Status**](V1Status.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deletePolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **deletePolicyV1beta1NamespacedPodDisruptionBudget**
> V1Status deletePolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, body, opts)



delete a PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new Kubernetes.V1DeleteOptions(); // V1DeleteOptions | 

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'gracePeriodSeconds': 56, // Integer | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true // Boolean | Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1DeleteOptions**](V1DeleteOptions.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **gracePeriodSeconds** | **Integer**| The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | [optional] 
 **orphanDependents** | **Boolean**| Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. | [optional] 

### Return type

[**V1Status**](V1Status.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getPolicyV1beta1APIResources"></a>
# **getPolicyV1beta1APIResources**
> V1APIResourceList getPolicyV1beta1APIResources()



get available resources

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPolicyV1beta1APIResources(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1APIResourceList**](V1APIResourceList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json, application/yaml, application/vnd.kubernetes.protobuf
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="listPolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **listPolicyV1beta1NamespacedPodDisruptionBudget**
> V1beta1PodDisruptionBudgetList listPolicyV1beta1NamespacedPodDisruptionBudget(namespace, opts)



list or watch objects of kind PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Integer | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPolicyV1beta1NamespacedPodDisruptionBudget(namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1beta1PodDisruptionBudgetList**](V1beta1PodDisruptionBudgetList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="listPolicyV1beta1PodDisruptionBudgetForAllNamespaces"></a>
# **listPolicyV1beta1PodDisruptionBudgetForAllNamespaces**
> V1beta1PodDisruptionBudgetList listPolicyV1beta1PodDisruptionBudgetForAllNamespaces(opts)



list or watch objects of kind PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Integer | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPolicyV1beta1PodDisruptionBudgetForAllNamespaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1beta1PodDisruptionBudgetList**](V1beta1PodDisruptionBudgetList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchPolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **patchPolicyV1beta1NamespacedPodDisruptionBudget**
> V1beta1PodDisruptionBudget patchPolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, body, opts)



partially update the specified PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new Kubernetes.V1Patch(); // V1Patch | 

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
apiInstance.patchPolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1Patch**](V1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus"></a>
# **patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus**
> V1beta1PodDisruptionBudget patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus(name, namespace, body, opts)



partially update status of the specified PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new Kubernetes.V1Patch(); // V1Patch | 

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
apiInstance.patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1Patch**](V1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readPolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **readPolicyV1beta1NamespacedPodDisruptionBudget**
> V1beta1PodDisruptionBudget readPolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, , opts)



read the specified PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'exact': true, // Boolean | Should the export be exact.  Exact export maintains cluster-specific fields like 'Namespace'.
  '_export': true // Boolean | Should this value be exported.  Export strips fields that a user can not specify.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readPolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readPolicyV1beta1NamespacedPodDisruptionBudgetStatus"></a>
# **readPolicyV1beta1NamespacedPodDisruptionBudgetStatus**
> V1beta1PodDisruptionBudget readPolicyV1beta1NamespacedPodDisruptionBudgetStatus(name, namespace, , opts)



read status of the specified PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

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
apiInstance.readPolicyV1beta1NamespacedPodDisruptionBudgetStatus(name, namespace, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replacePolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **replacePolicyV1beta1NamespacedPodDisruptionBudget**
> V1beta1PodDisruptionBudget replacePolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, body, opts)



replace the specified PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new Kubernetes.V1beta1PodDisruptionBudget(); // V1beta1PodDisruptionBudget | 

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
apiInstance.replacePolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus"></a>
# **replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus**
> V1beta1PodDisruptionBudget replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus(name, namespace, body, opts)



replace status of the specified PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var body = new Kubernetes.V1beta1PodDisruptionBudget(); // V1beta1PodDisruptionBudget | 

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
apiInstance.replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus(name, namespace, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1PodDisruptionBudget**](V1beta1PodDisruptionBudget.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="watchPolicyV1beta1NamespacedPodDisruptionBudget"></a>
# **watchPolicyV1beta1NamespacedPodDisruptionBudget**
> V1WatchEvent watchPolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, opts)



watch changes to an object of kind PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var name = "name_example"; // String | name of the PodDisruptionBudget

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Integer | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.watchPolicyV1beta1NamespacedPodDisruptionBudget(name, namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the PodDisruptionBudget | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1WatchEvent**](V1WatchEvent.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="watchPolicyV1beta1NamespacedPodDisruptionBudgetList"></a>
# **watchPolicyV1beta1NamespacedPodDisruptionBudgetList**
> V1WatchEvent watchPolicyV1beta1NamespacedPodDisruptionBudgetList(namespace, opts)



watch individual changes to a list of PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

var opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Integer | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.watchPolicyV1beta1NamespacedPodDisruptionBudgetList(namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1WatchEvent**](V1WatchEvent.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces"></a>
# **watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces**
> V1WatchEvent watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces(opts)



watch individual changes to a list of PodDisruptionBudget

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.PolicyvbetaApi();

var opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Integer | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1WatchEvent**](V1WatchEvent.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

