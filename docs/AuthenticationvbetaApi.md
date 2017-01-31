# Kubernetes.AuthenticationvbetaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthenticationV1beta1TokenReview**](AuthenticationvbetaApi.md#createAuthenticationV1beta1TokenReview) | **POST** /apis/authentication.k8s.io/v1beta1/tokenreviews | 
[**getAuthenticationV1beta1APIResources**](AuthenticationvbetaApi.md#getAuthenticationV1beta1APIResources) | **GET** /apis/authentication.k8s.io/v1beta1/ | 


<a name="createAuthenticationV1beta1TokenReview"></a>
# **createAuthenticationV1beta1TokenReview**
> V1beta1TokenReview createAuthenticationV1beta1TokenReview(body, opts)



create a TokenReview

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.AuthenticationvbetaApi();

var body = new Kubernetes.V1beta1TokenReview(); // V1beta1TokenReview | 

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
apiInstance.createAuthenticationV1beta1TokenReview(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1beta1TokenReview**](V1beta1TokenReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**V1beta1TokenReview**](V1beta1TokenReview.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: *_/_*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getAuthenticationV1beta1APIResources"></a>
# **getAuthenticationV1beta1APIResources**
> V1APIResourceList getAuthenticationV1beta1APIResources()



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

var apiInstance = new Kubernetes.AuthenticationvbetaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthenticationV1beta1APIResources(callback);
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

