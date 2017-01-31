# Kubernetes.V1ResourceQuotaStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard** | [**{String: ResourceQuantity}**](ResourceQuantity.md) | Hard is the set of enforced hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota | [optional] 
**used** | [**{String: ResourceQuantity}**](ResourceQuantity.md) | Used is the current observed total usage of the resource in the namespace. | [optional] 


