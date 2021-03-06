# KubernetesJsClient.V2alpha1CronJobSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrencyPolicy** | **String** | ConcurrencyPolicy specifies how to treat concurrent executions of a Job. | [optional] 
**jobTemplate** | [**V2alpha1JobTemplateSpec**](V2alpha1JobTemplateSpec.md) | JobTemplate is the object that describes the job that will be created when executing a CronJob. | 
**schedule** | **String** | Schedule contains the schedule in Cron format, see https://en.wikipedia.org/wiki/Cron. | 
**startingDeadlineSeconds** | **Number** | Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones. | [optional] 
**suspend** | **Boolean** | Suspend flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false. | [optional] 


