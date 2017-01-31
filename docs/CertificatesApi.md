# Kubernetes.CertificatesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCertificatesAPIGroup**](CertificatesApi.md#getCertificatesAPIGroup) | **GET** /apis/certificates.k8s.io/ | 


<a name="getCertificatesAPIGroup"></a>
# **getCertificatesAPIGroup**
> V1APIGroup getCertificatesAPIGroup()



get information of a group

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.CertificatesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCertificatesAPIGroup(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1APIGroup**](V1APIGroup.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json, application/yaml, application/vnd.kubernetes.protobuf
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

