/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: unversioned
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
    define(['ApiClient', 'model/V1AWSElasticBlockStoreVolumeSource', 'model/V1AzureDiskVolumeSource', 'model/V1AzureFileVolumeSource', 'model/V1CephFSVolumeSource', 'model/V1CinderVolumeSource', 'model/V1ConfigMapVolumeSource', 'model/V1DownwardAPIVolumeSource', 'model/V1EmptyDirVolumeSource', 'model/V1FCVolumeSource', 'model/V1FlexVolumeSource', 'model/V1FlockerVolumeSource', 'model/V1GCEPersistentDiskVolumeSource', 'model/V1GitRepoVolumeSource', 'model/V1GlusterfsVolumeSource', 'model/V1HostPathVolumeSource', 'model/V1ISCSIVolumeSource', 'model/V1NFSVolumeSource', 'model/V1PersistentVolumeClaimVolumeSource', 'model/V1PhotonPersistentDiskVolumeSource', 'model/V1QuobyteVolumeSource', 'model/V1RBDVolumeSource', 'model/V1SecretVolumeSource', 'model/V1VsphereVirtualDiskVolumeSource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1AWSElasticBlockStoreVolumeSource'), require('./V1AzureDiskVolumeSource'), require('./V1AzureFileVolumeSource'), require('./V1CephFSVolumeSource'), require('./V1CinderVolumeSource'), require('./V1ConfigMapVolumeSource'), require('./V1DownwardAPIVolumeSource'), require('./V1EmptyDirVolumeSource'), require('./V1FCVolumeSource'), require('./V1FlexVolumeSource'), require('./V1FlockerVolumeSource'), require('./V1GCEPersistentDiskVolumeSource'), require('./V1GitRepoVolumeSource'), require('./V1GlusterfsVolumeSource'), require('./V1HostPathVolumeSource'), require('./V1ISCSIVolumeSource'), require('./V1NFSVolumeSource'), require('./V1PersistentVolumeClaimVolumeSource'), require('./V1PhotonPersistentDiskVolumeSource'), require('./V1QuobyteVolumeSource'), require('./V1RBDVolumeSource'), require('./V1SecretVolumeSource'), require('./V1VsphereVirtualDiskVolumeSource'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1Volume = factory(root.Kubernetes.ApiClient, root.Kubernetes.V1AWSElasticBlockStoreVolumeSource, root.Kubernetes.V1AzureDiskVolumeSource, root.Kubernetes.V1AzureFileVolumeSource, root.Kubernetes.V1CephFSVolumeSource, root.Kubernetes.V1CinderVolumeSource, root.Kubernetes.V1ConfigMapVolumeSource, root.Kubernetes.V1DownwardAPIVolumeSource, root.Kubernetes.V1EmptyDirVolumeSource, root.Kubernetes.V1FCVolumeSource, root.Kubernetes.V1FlexVolumeSource, root.Kubernetes.V1FlockerVolumeSource, root.Kubernetes.V1GCEPersistentDiskVolumeSource, root.Kubernetes.V1GitRepoVolumeSource, root.Kubernetes.V1GlusterfsVolumeSource, root.Kubernetes.V1HostPathVolumeSource, root.Kubernetes.V1ISCSIVolumeSource, root.Kubernetes.V1NFSVolumeSource, root.Kubernetes.V1PersistentVolumeClaimVolumeSource, root.Kubernetes.V1PhotonPersistentDiskVolumeSource, root.Kubernetes.V1QuobyteVolumeSource, root.Kubernetes.V1RBDVolumeSource, root.Kubernetes.V1SecretVolumeSource, root.Kubernetes.V1VsphereVirtualDiskVolumeSource);
  }
}(this, function(ApiClient, V1AWSElasticBlockStoreVolumeSource, V1AzureDiskVolumeSource, V1AzureFileVolumeSource, V1CephFSVolumeSource, V1CinderVolumeSource, V1ConfigMapVolumeSource, V1DownwardAPIVolumeSource, V1EmptyDirVolumeSource, V1FCVolumeSource, V1FlexVolumeSource, V1FlockerVolumeSource, V1GCEPersistentDiskVolumeSource, V1GitRepoVolumeSource, V1GlusterfsVolumeSource, V1HostPathVolumeSource, V1ISCSIVolumeSource, V1NFSVolumeSource, V1PersistentVolumeClaimVolumeSource, V1PhotonPersistentDiskVolumeSource, V1QuobyteVolumeSource, V1RBDVolumeSource, V1SecretVolumeSource, V1VsphereVirtualDiskVolumeSource) {
  'use strict';




  /**
   * The V1Volume model module.
   * @module model/V1Volume
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1Volume</code>.
   * Volume represents a named volume in a pod that may be accessed by any container in the pod.
   * @alias module:model/V1Volume
   * @class
   * @param name {String} Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  var exports = function(name) {
    var _this = this;

















    _this['name'] = name;







  };

  /**
   * Constructs a <code>V1Volume</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Volume} obj Optional instance to populate.
   * @return {module:model/V1Volume} The populated <code>V1Volume</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('awsElasticBlockStore')) {
        obj['awsElasticBlockStore'] = V1AWSElasticBlockStoreVolumeSource.constructFromObject(data['awsElasticBlockStore']);
      }
      if (data.hasOwnProperty('azureDisk')) {
        obj['azureDisk'] = V1AzureDiskVolumeSource.constructFromObject(data['azureDisk']);
      }
      if (data.hasOwnProperty('azureFile')) {
        obj['azureFile'] = V1AzureFileVolumeSource.constructFromObject(data['azureFile']);
      }
      if (data.hasOwnProperty('cephfs')) {
        obj['cephfs'] = V1CephFSVolumeSource.constructFromObject(data['cephfs']);
      }
      if (data.hasOwnProperty('cinder')) {
        obj['cinder'] = V1CinderVolumeSource.constructFromObject(data['cinder']);
      }
      if (data.hasOwnProperty('configMap')) {
        obj['configMap'] = V1ConfigMapVolumeSource.constructFromObject(data['configMap']);
      }
      if (data.hasOwnProperty('downwardAPI')) {
        obj['downwardAPI'] = V1DownwardAPIVolumeSource.constructFromObject(data['downwardAPI']);
      }
      if (data.hasOwnProperty('emptyDir')) {
        obj['emptyDir'] = V1EmptyDirVolumeSource.constructFromObject(data['emptyDir']);
      }
      if (data.hasOwnProperty('fc')) {
        obj['fc'] = V1FCVolumeSource.constructFromObject(data['fc']);
      }
      if (data.hasOwnProperty('flexVolume')) {
        obj['flexVolume'] = V1FlexVolumeSource.constructFromObject(data['flexVolume']);
      }
      if (data.hasOwnProperty('flocker')) {
        obj['flocker'] = V1FlockerVolumeSource.constructFromObject(data['flocker']);
      }
      if (data.hasOwnProperty('gcePersistentDisk')) {
        obj['gcePersistentDisk'] = V1GCEPersistentDiskVolumeSource.constructFromObject(data['gcePersistentDisk']);
      }
      if (data.hasOwnProperty('gitRepo')) {
        obj['gitRepo'] = V1GitRepoVolumeSource.constructFromObject(data['gitRepo']);
      }
      if (data.hasOwnProperty('glusterfs')) {
        obj['glusterfs'] = V1GlusterfsVolumeSource.constructFromObject(data['glusterfs']);
      }
      if (data.hasOwnProperty('hostPath')) {
        obj['hostPath'] = V1HostPathVolumeSource.constructFromObject(data['hostPath']);
      }
      if (data.hasOwnProperty('iscsi')) {
        obj['iscsi'] = V1ISCSIVolumeSource.constructFromObject(data['iscsi']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nfs')) {
        obj['nfs'] = V1NFSVolumeSource.constructFromObject(data['nfs']);
      }
      if (data.hasOwnProperty('persistentVolumeClaim')) {
        obj['persistentVolumeClaim'] = V1PersistentVolumeClaimVolumeSource.constructFromObject(data['persistentVolumeClaim']);
      }
      if (data.hasOwnProperty('photonPersistentDisk')) {
        obj['photonPersistentDisk'] = V1PhotonPersistentDiskVolumeSource.constructFromObject(data['photonPersistentDisk']);
      }
      if (data.hasOwnProperty('quobyte')) {
        obj['quobyte'] = V1QuobyteVolumeSource.constructFromObject(data['quobyte']);
      }
      if (data.hasOwnProperty('rbd')) {
        obj['rbd'] = V1RBDVolumeSource.constructFromObject(data['rbd']);
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = V1SecretVolumeSource.constructFromObject(data['secret']);
      }
      if (data.hasOwnProperty('vsphereVolume')) {
        obj['vsphereVolume'] = V1VsphereVirtualDiskVolumeSource.constructFromObject(data['vsphereVolume']);
      }
    }
    return obj;
  }

  /**
   * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
   * @member {module:model/V1AWSElasticBlockStoreVolumeSource} awsElasticBlockStore
   */
  exports.prototype['awsElasticBlockStore'] = undefined;
  /**
   * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   * @member {module:model/V1AzureDiskVolumeSource} azureDisk
   */
  exports.prototype['azureDisk'] = undefined;
  /**
   * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
   * @member {module:model/V1AzureFileVolumeSource} azureFile
   */
  exports.prototype['azureFile'] = undefined;
  /**
   * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
   * @member {module:model/V1CephFSVolumeSource} cephfs
   */
  exports.prototype['cephfs'] = undefined;
  /**
   * Cinder represents a cinder volume attached and mounted on kubelets host machine More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @member {module:model/V1CinderVolumeSource} cinder
   */
  exports.prototype['cinder'] = undefined;
  /**
   * ConfigMap represents a configMap that should populate this volume
   * @member {module:model/V1ConfigMapVolumeSource} configMap
   */
  exports.prototype['configMap'] = undefined;
  /**
   * DownwardAPI represents downward API about the pod that should populate this volume
   * @member {module:model/V1DownwardAPIVolumeSource} downwardAPI
   */
  exports.prototype['downwardAPI'] = undefined;
  /**
   * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
   * @member {module:model/V1EmptyDirVolumeSource} emptyDir
   */
  exports.prototype['emptyDir'] = undefined;
  /**
   * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
   * @member {module:model/V1FCVolumeSource} fc
   */
  exports.prototype['fc'] = undefined;
  /**
   * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. This is an alpha feature and may change in future.
   * @member {module:model/V1FlexVolumeSource} flexVolume
   */
  exports.prototype['flexVolume'] = undefined;
  /**
   * Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
   * @member {module:model/V1FlockerVolumeSource} flocker
   */
  exports.prototype['flocker'] = undefined;
  /**
   * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   * @member {module:model/V1GCEPersistentDiskVolumeSource} gcePersistentDisk
   */
  exports.prototype['gcePersistentDisk'] = undefined;
  /**
   * GitRepo represents a git repository at a particular revision.
   * @member {module:model/V1GitRepoVolumeSource} gitRepo
   */
  exports.prototype['gitRepo'] = undefined;
  /**
   * Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
   * @member {module:model/V1GlusterfsVolumeSource} glusterfs
   */
  exports.prototype['glusterfs'] = undefined;
  /**
   * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
   * @member {module:model/V1HostPathVolumeSource} hostPath
   */
  exports.prototype['hostPath'] = undefined;
  /**
   * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: http://releases.k8s.io/HEAD/examples/volumes/iscsi/README.md
   * @member {module:model/V1ISCSIVolumeSource} iscsi
   */
  exports.prototype['iscsi'] = undefined;
  /**
   * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * NFS represents an NFS mount on the host that shares a pod's lifetime More info: http://kubernetes.io/docs/user-guide/volumes#nfs
   * @member {module:model/V1NFSVolumeSource} nfs
   */
  exports.prototype['nfs'] = undefined;
  /**
   * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#persistentvolumeclaims
   * @member {module:model/V1PersistentVolumeClaimVolumeSource} persistentVolumeClaim
   */
  exports.prototype['persistentVolumeClaim'] = undefined;
  /**
   * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   * @member {module:model/V1PhotonPersistentDiskVolumeSource} photonPersistentDisk
   */
  exports.prototype['photonPersistentDisk'] = undefined;
  /**
   * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
   * @member {module:model/V1QuobyteVolumeSource} quobyte
   */
  exports.prototype['quobyte'] = undefined;
  /**
   * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
   * @member {module:model/V1RBDVolumeSource} rbd
   */
  exports.prototype['rbd'] = undefined;
  /**
   * Secret represents a secret that should populate this volume. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
   * @member {module:model/V1SecretVolumeSource} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   * @member {module:model/V1VsphereVirtualDiskVolumeSource} vsphereVolume
   */
  exports.prototype['vsphereVolume'] = undefined;



  return exports;
}));


