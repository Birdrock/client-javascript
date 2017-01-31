/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1Affinity', 'model/V1Container', 'model/V1LocalObjectReference', 'model/V1PodSecurityContext', 'model/V1Volume'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Affinity'), require('./V1Container'), require('./V1LocalObjectReference'), require('./V1PodSecurityContext'), require('./V1Volume'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1PodSpec = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1Affinity, root.Kubernetes.V1Container, root.Kubernetes.V1LocalObjectReference, root.Kubernetes.V1PodSecurityContext, root.Kubernetes.V1Volume);
  }
}(this, function(ApiClient, V1Affinity, V1Container, V1LocalObjectReference, V1PodSecurityContext, V1Volume) {
  'use strict';




  /**
   * The V1PodSpec model module.
   * @module model/V1PodSpec
   * @version v1.6.0
   */

  /**
   * Constructs a new <code>V1PodSpec</code>.
   * PodSpec is a description of a pod.
   * @alias module:model/V1PodSpec
   * @class
   * @param containers {Array.<module:model/V1Container>} List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers
   */
  var exports = function(containers) {
    var _this = this;



    _this['containers'] = containers;
















  };

  /**
   * Constructs a <code>V1PodSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1PodSpec} obj Optional instance to populate.
   * @return {module:model/V1PodSpec} The populated <code>V1PodSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activeDeadlineSeconds')) {
        obj['activeDeadlineSeconds'] = ApiClient.convertToType(data['activeDeadlineSeconds'], 'Integer');
      }
      if (data.hasOwnProperty('affinity')) {
        obj['affinity'] = V1Affinity.constructFromObject(data['affinity']);
      }
      if (data.hasOwnProperty('containers')) {
        obj['containers'] = ApiClient.convertToType(data['containers'], [V1Container]);
      }
      if (data.hasOwnProperty('dnsPolicy')) {
        obj['dnsPolicy'] = ApiClient.convertToType(data['dnsPolicy'], 'String');
      }
      if (data.hasOwnProperty('hostIPC')) {
        obj['hostIPC'] = ApiClient.convertToType(data['hostIPC'], 'Boolean');
      }
      if (data.hasOwnProperty('hostNetwork')) {
        obj['hostNetwork'] = ApiClient.convertToType(data['hostNetwork'], 'Boolean');
      }
      if (data.hasOwnProperty('hostPID')) {
        obj['hostPID'] = ApiClient.convertToType(data['hostPID'], 'Boolean');
      }
      if (data.hasOwnProperty('hostname')) {
        obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
      }
      if (data.hasOwnProperty('imagePullSecrets')) {
        obj['imagePullSecrets'] = ApiClient.convertToType(data['imagePullSecrets'], [V1LocalObjectReference]);
      }
      if (data.hasOwnProperty('nodeName')) {
        obj['nodeName'] = ApiClient.convertToType(data['nodeName'], 'String');
      }
      if (data.hasOwnProperty('nodeSelector')) {
        obj['nodeSelector'] = ApiClient.convertToType(data['nodeSelector'], {'String': 'String'});
      }
      if (data.hasOwnProperty('restartPolicy')) {
        obj['restartPolicy'] = ApiClient.convertToType(data['restartPolicy'], 'String');
      }
      if (data.hasOwnProperty('schedulername')) {
        obj['schedulername'] = ApiClient.convertToType(data['schedulername'], 'String');
      }
      if (data.hasOwnProperty('securityContext')) {
        obj['securityContext'] = V1PodSecurityContext.constructFromObject(data['securityContext']);
      }
      if (data.hasOwnProperty('serviceAccount')) {
        obj['serviceAccount'] = ApiClient.convertToType(data['serviceAccount'], 'String');
      }
      if (data.hasOwnProperty('serviceAccountName')) {
        obj['serviceAccountName'] = ApiClient.convertToType(data['serviceAccountName'], 'String');
      }
      if (data.hasOwnProperty('subdomain')) {
        obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
      }
      if (data.hasOwnProperty('terminationGracePeriodSeconds')) {
        obj['terminationGracePeriodSeconds'] = ApiClient.convertToType(data['terminationGracePeriodSeconds'], 'Integer');
      }
      if (data.hasOwnProperty('volumes')) {
        obj['volumes'] = ApiClient.convertToType(data['volumes'], [V1Volume]);
      }
    }
    return obj;
  }

  /**
   * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
   * @member {Integer} activeDeadlineSeconds
   */
  exports.prototype['activeDeadlineSeconds'] = undefined;
  /**
   * If specified, the pod's scheduling constraints
   * @member {module:model/V1Affinity} affinity
   */
  exports.prototype['affinity'] = undefined;
  /**
   * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers
   * @member {Array.<module:model/V1Container>} containers
   */
  exports.prototype['containers'] = undefined;
  /**
   * Set DNS policy for containers within the pod. One of 'ClusterFirst' or 'Default'. Defaults to \"ClusterFirst\".
   * @member {String} dnsPolicy
   */
  exports.prototype['dnsPolicy'] = undefined;
  /**
   * Use the host's ipc namespace. Optional: Default to false.
   * @member {Boolean} hostIPC
   */
  exports.prototype['hostIPC'] = undefined;
  /**
   * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
   * @member {Boolean} hostNetwork
   */
  exports.prototype['hostNetwork'] = undefined;
  /**
   * Use the host's pid namespace. Optional: Default to false.
   * @member {Boolean} hostPID
   */
  exports.prototype['hostPID'] = undefined;
  /**
   * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
   * @member {String} hostname
   */
  exports.prototype['hostname'] = undefined;
  /**
   * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: http://kubernetes.io/docs/user-guide/images#specifying-imagepullsecrets-on-a-pod
   * @member {Array.<module:model/V1LocalObjectReference>} imagePullSecrets
   */
  exports.prototype['imagePullSecrets'] = undefined;
  /**
   * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
   * @member {String} nodeName
   */
  exports.prototype['nodeName'] = undefined;
  /**
   * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection/README
   * @member {Object.<String, String>} nodeSelector
   */
  exports.prototype['nodeSelector'] = undefined;
  /**
   * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy
   * @member {String} restartPolicy
   */
  exports.prototype['restartPolicy'] = undefined;
  /**
   * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
   * @member {String} schedulername
   */
  exports.prototype['schedulername'] = undefined;
  /**
   * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
   * @member {module:model/V1PodSecurityContext} securityContext
   */
  exports.prototype['securityContext'] = undefined;
  /**
   * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
   * @member {String} serviceAccount
   */
  exports.prototype['serviceAccount'] = undefined;
  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md
   * @member {String} serviceAccountName
   */
  exports.prototype['serviceAccountName'] = undefined;
  /**
   * If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all.
   * @member {String} subdomain
   */
  exports.prototype['subdomain'] = undefined;
  /**
   * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
   * @member {Integer} terminationGracePeriodSeconds
   */
  exports.prototype['terminationGracePeriodSeconds'] = undefined;
  /**
   * List of volumes that can be mounted by containers belonging to the pod. More info: http://kubernetes.io/docs/user-guide/volumes
   * @member {Array.<module:model/V1Volume>} volumes
   */
  exports.prototype['volumes'] = undefined;



  return exports;
}));


