# KubernetesJsClient.V1beta1Ingress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**V1ObjectMeta**](V1ObjectMeta.md) | Standard object&#39;s metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata | [optional] 
**spec** | [**V1beta1IngressSpec**](V1beta1IngressSpec.md) | Spec is the desired state of the Ingress. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status | [optional] 
**status** | [**V1beta1IngressStatus**](V1beta1IngressStatus.md) | Status is the current state of the Ingress. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status | [optional] 


