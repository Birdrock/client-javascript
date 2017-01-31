# Kubernetes.AuthorizationvbetaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthorizationV1beta1NamespacedLocalSubjectAccessReview**](AuthorizationvbetaApi.md#createAuthorizationV1beta1NamespacedLocalSubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1beta1/namespaces/{namespace}/localsubjectaccessreviews | 
[**createAuthorizationV1beta1SelfSubjectAccessReview**](AuthorizationvbetaApi.md#createAuthorizationV1beta1SelfSubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1beta1/selfsubjectaccessreviews | 
[**createAuthorizationV1beta1SubjectAccessReview**](AuthorizationvbetaApi.md#createAuthorizationV1beta1SubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1beta1/subjectaccessreviews | 
[**getAuthorizationV1beta1APIResources**](AuthorizationvbetaApi.md#getAuthorizationV1beta1APIResources) | **GET** /apis/authorization.k8s.io/v1beta1/ | 


<a name="createAuthorizationV1beta1NamespacedLocalSubjectAccessReview"></a>
# **createAuthorizationV1beta1NamespacedLocalSubjectAccessReview**
> V1beta1LocalSubjectAccessReview createAuthorizationV1beta1NamespacedLocalSubjectAccessReview(body, namespace, opts)



create a LocalSubjectAccessReview

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.AuthorizationvbetaApi();

var body = new Kubernetes.V1beta1LocalSubjectAccessReview(); // V1beta1LocalSubjectAccessReview | 

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
apiInstance.createAuthorizationV1beta1NamespacedLocalSubjectAccessReview(body, namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1LocalSubjectAccessReview**](V1beta1LocalSubjectAccessReview.md)|  | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1LocalSubjectAccessReview**](V1beta1LocalSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1beta1SelfSubjectAccessReview"></a>
# **createAuthorizationV1beta1SelfSubjectAccessReview**
> V1beta1SelfSubjectAccessReview createAuthorizationV1beta1SelfSubjectAccessReview(body, opts)



create a SelfSubjectAccessReview

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.AuthorizationvbetaApi();

var body = new Kubernetes.V1beta1SelfSubjectAccessReview(); // V1beta1SelfSubjectAccessReview | 

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
apiInstance.createAuthorizationV1beta1SelfSubjectAccessReview(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1SelfSubjectAccessReview**](V1beta1SelfSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1SelfSubjectAccessReview**](V1beta1SelfSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1beta1SubjectAccessReview"></a>
# **createAuthorizationV1beta1SubjectAccessReview**
> V1beta1SubjectAccessReview createAuthorizationV1beta1SubjectAccessReview(body, opts)



create a SubjectAccessReview

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.AuthorizationvbetaApi();

var body = new Kubernetes.V1beta1SubjectAccessReview(); // V1beta1SubjectAccessReview | 

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
apiInstance.createAuthorizationV1beta1SubjectAccessReview(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1SubjectAccessReview**](V1beta1SubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1SubjectAccessReview**](V1beta1SubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getAuthorizationV1beta1APIResources"></a>
# **getAuthorizationV1beta1APIResources**
> V1APIResourceList getAuthorizationV1beta1APIResources()



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

var apiInstance = new Kubernetes.AuthorizationvbetaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthorizationV1beta1APIResources(callback);
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

