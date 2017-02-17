# KubernetesJsClient.V1beta1HorizontalPodAutoscalerSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpuUtilization** | [**V1beta1CPUTargetUtilization**](V1beta1CPUTargetUtilization.md) | target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified it defaults to the target CPU utilization at 80% of the requested resources. | [optional] 
**maxReplicas** | **Number** | upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. | 
**minReplicas** | **Number** | lower limit for the number of pods that can be set by the autoscaler, default 1. | [optional] 
**scaleRef** | [**V1beta1SubresourceReference**](V1beta1SubresourceReference.md) | reference to Scale subresource; horizontal pod autoscaler will learn the current resource consumption from its status, and will set the desired number of pods by modifying its spec. | 


