# Kubernetes.CertificatesvbetaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#createCertificatesV1beta1CertificateSigningRequest) | **POST** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests | 
[**deleteCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#deleteCertificatesV1beta1CertificateSigningRequest) | **DELETE** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name} | 
[**deleteCertificatesV1beta1CollectionCertificateSigningRequest**](CertificatesvbetaApi.md#deleteCertificatesV1beta1CollectionCertificateSigningRequest) | **DELETE** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests | 
[**getCertificatesV1beta1APIResources**](CertificatesvbetaApi.md#getCertificatesV1beta1APIResources) | **GET** /apis/certificates.k8s.io/v1beta1/ | 
[**listCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#listCertificatesV1beta1CertificateSigningRequest) | **GET** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests | 
[**patchCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#patchCertificatesV1beta1CertificateSigningRequest) | **PATCH** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name} | 
[**readCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#readCertificatesV1beta1CertificateSigningRequest) | **GET** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name} | 
[**replaceCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#replaceCertificatesV1beta1CertificateSigningRequest) | **PUT** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name} | 
[**replaceCertificatesV1beta1CertificateSigningRequestApproval**](CertificatesvbetaApi.md#replaceCertificatesV1beta1CertificateSigningRequestApproval) | **PUT** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}/approval | 
[**replaceCertificatesV1beta1CertificateSigningRequestStatus**](CertificatesvbetaApi.md#replaceCertificatesV1beta1CertificateSigningRequestStatus) | **PUT** /apis/certificates.k8s.io/v1beta1/certificatesigningrequests/{name}/status | 
[**watchCertificatesV1beta1CertificateSigningRequest**](CertificatesvbetaApi.md#watchCertificatesV1beta1CertificateSigningRequest) | **GET** /apis/certificates.k8s.io/v1beta1/watch/certificatesigningrequests/{name} | 
[**watchCertificatesV1beta1CertificateSigningRequestList**](CertificatesvbetaApi.md#watchCertificatesV1beta1CertificateSigningRequestList) | **GET** /apis/certificates.k8s.io/v1beta1/watch/certificatesigningrequests | 


<a name="createCertificatesV1beta1CertificateSigningRequest"></a>
# **createCertificatesV1beta1CertificateSigningRequest**
> V1beta1CertificateSigningRequest createCertificatesV1beta1CertificateSigningRequest(body, opts)



create a CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var body = new Kubernetes.V1beta1CertificateSigningRequest(); // V1beta1CertificateSigningRequest | 

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
apiInstance.createCertificatesV1beta1CertificateSigningRequest(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteCertificatesV1beta1CertificateSigningRequest"></a>
# **deleteCertificatesV1beta1CertificateSigningRequest**
> V1Status deleteCertificatesV1beta1CertificateSigningRequest(name, body, opts)



delete a CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.deleteCertificatesV1beta1CertificateSigningRequest(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
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

<a name="deleteCertificatesV1beta1CollectionCertificateSigningRequest"></a>
# **deleteCertificatesV1beta1CollectionCertificateSigningRequest**
> V1Status deleteCertificatesV1beta1CollectionCertificateSigningRequest(opts)



delete collection of CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

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
apiInstance.deleteCertificatesV1beta1CollectionCertificateSigningRequest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="getCertificatesV1beta1APIResources"></a>
# **getCertificatesV1beta1APIResources**
> V1APIResourceList getCertificatesV1beta1APIResources()



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

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCertificatesV1beta1APIResources(callback);
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

<a name="listCertificatesV1beta1CertificateSigningRequest"></a>
# **listCertificatesV1beta1CertificateSigningRequest**
> V1beta1CertificateSigningRequestList listCertificatesV1beta1CertificateSigningRequest(opts)



list or watch objects of kind CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

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
apiInstance.listCertificatesV1beta1CertificateSigningRequest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Integer**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**V1beta1CertificateSigningRequestList**](V1beta1CertificateSigningRequestList.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchCertificatesV1beta1CertificateSigningRequest"></a>
# **patchCertificatesV1beta1CertificateSigningRequest**
> V1beta1CertificateSigningRequest patchCertificatesV1beta1CertificateSigningRequest(name, body, opts)



partially update the specified CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.patchCertificatesV1beta1CertificateSigningRequest(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
 **body** | [**V1Patch**](V1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readCertificatesV1beta1CertificateSigningRequest"></a>
# **readCertificatesV1beta1CertificateSigningRequest**
> V1beta1CertificateSigningRequest readCertificatesV1beta1CertificateSigningRequest(name, , opts)



read the specified CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.readCertificatesV1beta1CertificateSigningRequest(name, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceCertificatesV1beta1CertificateSigningRequest"></a>
# **replaceCertificatesV1beta1CertificateSigningRequest**
> V1beta1CertificateSigningRequest replaceCertificatesV1beta1CertificateSigningRequest(name, body, opts)



replace the specified CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var name = "name_example"; // String | name of the CertificateSigningRequest

var body = new Kubernetes.V1beta1CertificateSigningRequest(); // V1beta1CertificateSigningRequest | 

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
apiInstance.replaceCertificatesV1beta1CertificateSigningRequest(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
 **body** | [**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceCertificatesV1beta1CertificateSigningRequestApproval"></a>
# **replaceCertificatesV1beta1CertificateSigningRequestApproval**
> V1beta1CertificateSigningRequest replaceCertificatesV1beta1CertificateSigningRequestApproval(body, name, opts)



replace approval of the specified CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var body = new Kubernetes.V1beta1CertificateSigningRequest(); // V1beta1CertificateSigningRequest | 

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
apiInstance.replaceCertificatesV1beta1CertificateSigningRequestApproval(body, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)|  | 
 **name** | **String**| name of the CertificateSigningRequest | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceCertificatesV1beta1CertificateSigningRequestStatus"></a>
# **replaceCertificatesV1beta1CertificateSigningRequestStatus**
> V1beta1CertificateSigningRequest replaceCertificatesV1beta1CertificateSigningRequestStatus(body, name, opts)



replace status of the specified CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var body = new Kubernetes.V1beta1CertificateSigningRequest(); // V1beta1CertificateSigningRequest | 

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
apiInstance.replaceCertificatesV1beta1CertificateSigningRequestStatus(body, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)|  | 
 **name** | **String**| name of the CertificateSigningRequest | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1CertificateSigningRequest**](V1beta1CertificateSigningRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="watchCertificatesV1beta1CertificateSigningRequest"></a>
# **watchCertificatesV1beta1CertificateSigningRequest**
> V1WatchEvent watchCertificatesV1beta1CertificateSigningRequest(name, opts)



watch changes to an object of kind CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

var name = "name_example"; // String | name of the CertificateSigningRequest

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
apiInstance.watchCertificatesV1beta1CertificateSigningRequest(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the CertificateSigningRequest | 
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

<a name="watchCertificatesV1beta1CertificateSigningRequestList"></a>
# **watchCertificatesV1beta1CertificateSigningRequestList**
> V1WatchEvent watchCertificatesV1beta1CertificateSigningRequestList(opts)



watch individual changes to a list of CertificateSigningRequest

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesvbetaApi();

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
apiInstance.watchCertificatesV1beta1CertificateSigningRequestList(opts, callback);
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

