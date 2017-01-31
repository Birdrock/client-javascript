# Kubernetes.V1PodSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeDeadlineSeconds** | **Integer** | Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. | [optional] 
**affinity** | [**V1Affinity**](V1Affinity.md) | If specified, the pod&#39;s scheduling constraints | [optional] 
**containers** | [**[V1Container]**](V1Container.md) | List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers | 
**dnsPolicy** | **String** | Set DNS policy for containers within the pod. One of &#39;ClusterFirst&#39; or &#39;Default&#39;. Defaults to \&quot;ClusterFirst\&quot;. | [optional] 
**hostIPC** | **Boolean** | Use the host&#39;s ipc namespace. Optional: Default to false. | [optional] 
**hostNetwork** | **Boolean** | Host networking requested for this pod. Use the host&#39;s network namespace. If this option is set, the ports that will be used must be specified. Default to false. | [optional] 
**hostPID** | **Boolean** | Use the host&#39;s pid namespace. Optional: Default to false. | [optional] 
**hostname** | **String** | Specifies the hostname of the Pod If not specified, the pod&#39;s hostname will be set to a system-defined value. | [optional] 
**imagePullSecrets** | [**[V1LocalObjectReference]**](V1LocalObjectReference.md) | ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: http://kubernetes.io/docs/user-guide/images#specifying-imagepullsecrets-on-a-pod | [optional] 
**nodeName** | **String** | NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. | [optional] 
**nodeSelector** | **{String: String}** | NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node&#39;s labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection/README | [optional] 
**restartPolicy** | **String** | Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy | [optional] 
**schedulername** | **String** | If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. | [optional] 
**securityContext** | [**V1PodSecurityContext**](V1PodSecurityContext.md) | SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field. | [optional] 
**serviceAccount** | **String** | DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. | [optional] 
**serviceAccountName** | **String** | ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md | [optional] 
**subdomain** | **String** | If specified, the fully qualified Pod hostname will be \&quot;&lt;hostname&gt;.&lt;subdomain&gt;.&lt;pod namespace&gt;.svc.&lt;cluster domain&gt;\&quot;. If not specified, the pod will not have a domainname at all. | [optional] 
**terminationGracePeriodSeconds** | **Integer** | Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. | [optional] 
**volumes** | [**[V1Volume]**](V1Volume.md) | List of volumes that can be mounted by containers belonging to the pod. More info: http://kubernetes.io/docs/user-guide/volumes | [optional] 

