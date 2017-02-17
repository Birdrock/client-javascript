# KubernetesJsClient.V1ContainerStateTerminated

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerID** | **String** | Container&#39;s ID in the format &#39;docker://&lt;container_id&gt;&#39; | [optional] 
**exitCode** | **Number** | Exit status from the last termination of the container | 
**finishedAt** | [**UnversionedTime**](UnversionedTime.md) | Time at which the container last terminated | [optional] 
**message** | **String** | Message regarding the last termination of the container | [optional] 
**reason** | **String** | (brief) reason from the last termination of the container | [optional] 
**signal** | **Number** | Signal from the last termination of the container | [optional] 
**startedAt** | [**UnversionedTime**](UnversionedTime.md) | Time at which previous execution of the container started | [optional] 


