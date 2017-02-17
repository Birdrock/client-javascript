# KubernetesJsClient.V1alpha1Subject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion holds the API group and version of the referenced object. | [optional] 
**kind** | **String** | Kind of object being referenced. Values defined by this API group are \&quot;User\&quot;, \&quot;Group\&quot;, and \&quot;ServiceAccount\&quot;. If the Authorizer does not recognized the kind value, the Authorizer should report an error. | 
**name** | **String** | Name of the object being referenced. | 
**namespace** | **String** | Namespace of the referenced object.  If the object kind is non-namespace, such as \&quot;User\&quot; or \&quot;Group\&quot;, and this value is not empty the Authorizer should report an error. | [optional] 


