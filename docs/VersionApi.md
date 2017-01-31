# Kubernetes.VersionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCodeVersion**](VersionApi.md#getCodeVersion) | **GET** /version/ | 


<a name="getCodeVersion"></a>
# **getCodeVersion**
> VersionInfo getCodeVersion()



get the code version

### Example
```javascript
var Kubernetes = require('kubernetes');
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.VersionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCodeVersion(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VersionInfo**](VersionInfo.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

