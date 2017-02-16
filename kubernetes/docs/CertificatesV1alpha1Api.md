# KubernetesJsClient.CertificatesV1alpha1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificateSigningRequest**](CertificatesV1alpha1Api.md#createCertificateSigningRequest) | **POST** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests | 
[**deleteCertificateSigningRequest**](CertificatesV1alpha1Api.md#deleteCertificateSigningRequest) | **DELETE** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name} | 
[**deleteCollectionCertificateSigningRequest**](CertificatesV1alpha1Api.md#deleteCollectionCertificateSigningRequest) | **DELETE** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests | 
[**getAPIResources**](CertificatesV1alpha1Api.md#getAPIResources) | **GET** /apis/certificates.k8s.io/v1alpha1/ | 
[**listCertificateSigningRequest**](CertificatesV1alpha1Api.md#listCertificateSigningRequest) | **GET** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests | 
[**patchCertificateSigningRequest**](CertificatesV1alpha1Api.md#patchCertificateSigningRequest) | **PATCH** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name} | 
[**readCertificateSigningRequest**](CertificatesV1alpha1Api.md#readCertificateSigningRequest) | **GET** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name} | 
[**replaceCertificateSigningRequest**](CertificatesV1alpha1Api.md#replaceCertificateSigningRequest) | **PUT** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name} | 
[**replaceCertificateSigningRequestApproval**](CertificatesV1alpha1Api.md#replaceCertificateSigningRequestApproval) | **PUT** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}/approval | 
[**replaceCertificateSigningRequestStatus**](CertificatesV1alpha1Api.md#replaceCertificateSigningRequestStatus) | **PUT** /apis/certificates.k8s.io/v1alpha1/certificatesigningrequests/{name}/status | 


<a name="createCertificateSigningRequest"></a>
# **createCertificateSigningRequest**
> V1alpha1CertificateSigningRequest createCertificateSigningRequest(body, opts)



create a CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var body = new KubernetesJsClient.V1alpha1CertificateSigningRequest(); // V1alpha1CertificateSigningRequest | 

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
apiInstance.createCertificateSigningRequest(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteCertificateSigningRequest"></a>
# **deleteCertificateSigningRequest**
> UnversionedStatus deleteCertificateSigningRequest(name, body, opts)



delete a CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.deleteCertificateSigningRequest(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
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

<a name="deleteCollectionCertificateSigningRequest"></a>
# **deleteCollectionCertificateSigningRequest**
> UnversionedStatus deleteCollectionCertificateSigningRequest(opts)



delete collection of CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

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
apiInstance.deleteCollectionCertificateSigningRequest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

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

<a name="listCertificateSigningRequest"></a>
# **listCertificateSigningRequest**
> V1alpha1CertificateSigningRequestList listCertificateSigningRequest(opts)



list or watch objects of kind CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

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
apiInstance.listCertificateSigningRequest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequestList**](V1alpha1CertificateSigningRequestList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchCertificateSigningRequest"></a>
# **patchCertificateSigningRequest**
> V1alpha1CertificateSigningRequest patchCertificateSigningRequest(name, body, opts)



partially update the specified CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.patchCertificateSigningRequest(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
 **body** | [**UnversionedPatch**](UnversionedPatch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readCertificateSigningRequest"></a>
# **readCertificateSigningRequest**
> V1alpha1CertificateSigningRequest readCertificateSigningRequest(name, , opts)



read the specified CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.readCertificateSigningRequest(name, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39; | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceCertificateSigningRequest"></a>
# **replaceCertificateSigningRequest**
> V1alpha1CertificateSigningRequest replaceCertificateSigningRequest(name, body, opts)



replace the specified CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var name = "name_example"; // String | name of the CertificateSigningRequest

var body = new KubernetesJsClient.V1alpha1CertificateSigningRequest(); // V1alpha1CertificateSigningRequest | 

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
apiInstance.replaceCertificateSigningRequest(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
 **body** | [**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceCertificateSigningRequestApproval"></a>
# **replaceCertificateSigningRequestApproval**
> V1alpha1CertificateSigningRequest replaceCertificateSigningRequestApproval(body, name, opts)



replace approval of the specified CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var body = new KubernetesJsClient.V1alpha1CertificateSigningRequest(); // V1alpha1CertificateSigningRequest | 

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.replaceCertificateSigningRequestApproval(body, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)|  | 
 **name** | **String**| name of the CertificateSigningRequest | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceCertificateSigningRequestStatus"></a>
# **replaceCertificateSigningRequestStatus**
> V1alpha1CertificateSigningRequest replaceCertificateSigningRequestStatus(body, name, opts)



replace status of the specified CertificateSigningRequest

### Example
```javascript
var KubernetesJsClient = require('kubernetes-js-client');
var defaultClient = KubernetesJsClient.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new KubernetesJsClient.CertificatesV1alpha1Api();

var body = new KubernetesJsClient.V1alpha1CertificateSigningRequest(); // V1alpha1CertificateSigningRequest | 

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.replaceCertificateSigningRequestStatus(body, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)|  | 
 **name** | **String**| name of the CertificateSigningRequest | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1alpha1CertificateSigningRequest**](V1alpha1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

