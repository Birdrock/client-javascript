# Kubernetes.V1NodeCondition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastHeartbeatTime** | [**V1Time**](V1Time.md) | Last time we got an update on a given condition. | [optional] 
**lastTransitionTime** | [**V1Time**](V1Time.md) | Last time the condition transit from one status to another. | [optional] 
**message** | **String** | Human readable message indicating details about last transition. | [optional] 
**reason** | **String** | (brief) reason for the condition&#39;s last transition. | [optional] 
**status** | **String** | Status of the condition, one of True, False, Unknown. | 
**type** | **String** | Type of node condition. | 

