# Kubernetes.V1beta1HorizontalPodAutoscalerStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentCPUUtilizationPercentage** | **Integer** | current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU. | [optional] 
**currentReplicas** | **Integer** | current number of replicas of pods managed by this autoscaler. | 
**desiredReplicas** | **Integer** | desired number of replicas of pods managed by this autoscaler. | 
**lastScaleTime** | [**V1Time**](V1Time.md) | last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed. | [optional] 
**observedGeneration** | **Integer** | most recent generation observed by this autoscaler. | [optional] 

