var Kubernetes = require('./index');
// var Kubernetes = require('kubernetes');
console.log("@##@@#     ", Kubernetes);
var defaultClient = Kubernetes.ApiClient.default;

// Configure API key authorization: BearerToken
var BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4ta24wMHMiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6Ijk3MTBkNjc3LWRjNjctMTFlNi05NWMyLTA4MDAyNzY4YjNlYiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.RqeMeu3zxYqfGHpDV0vlVjG8EYgp_dG4Dr8dNc9zN-5J-tUOE_lBJ5VUWwh08GpN7jL3L66IZJ-zmJevVj7bd3OZBaGGTrEzgCrfuyrLIuPY-af8rZkElAtEaFdiT0m-z7JQqpUJ0yz9cZcOHiKN3vLR9zB7kVYcDWvMPwzzJsP65gPQptU1mRcx7w0wPtO8OmQXkrwrxoySwJpj7ug4Qv-QAIW9_Xa67qUUtKNaP1lgRIt9r4UL1fOrzS0fDNgBQClQ3CupkKRFQ4q7nvp6GkE-8HGzIg4tG65khfD2i750InZHGFZhLCTFmjiS-bmXx-MezEPb5rJ4rovMXcWj9w';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

var apiInstance = new Kubernetes.ApisApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAPIVersions(callback);