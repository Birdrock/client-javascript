/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.5.1-660c2a2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ServicePort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ServicePort'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ServiceSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ServicePort);
  }
}(this, function(ApiClient, V1ServicePort) {
  'use strict';




  /**
   * The V1ServiceSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ServiceSpec
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1ServiceSpec</code>.
   * ServiceSpec describes the attributes that a user creates on a service.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ServiceSpec
   * @class
   * @param ports {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1ServicePort>} The list of ports that are exposed by this service. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
   */
  var exports = function(ports) {
    var _this = this;







    _this['ports'] = ports;



  };

  /**
   * Constructs a <code>V1ServiceSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ServiceSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ServiceSpec} The populated <code>V1ServiceSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clusterIP')) {
        obj['clusterIP'] = ApiClient.convertToType(data['clusterIP'], 'String');
      }
      if (data.hasOwnProperty('deprecatedPublicIPs')) {
        obj['deprecatedPublicIPs'] = ApiClient.convertToType(data['deprecatedPublicIPs'], ['String']);
      }
      if (data.hasOwnProperty('externalIPs')) {
        obj['externalIPs'] = ApiClient.convertToType(data['externalIPs'], ['String']);
      }
      if (data.hasOwnProperty('externalName')) {
        obj['externalName'] = ApiClient.convertToType(data['externalName'], 'String');
      }
      if (data.hasOwnProperty('loadBalancerIP')) {
        obj['loadBalancerIP'] = ApiClient.convertToType(data['loadBalancerIP'], 'String');
      }
      if (data.hasOwnProperty('loadBalancerSourceRanges')) {
        obj['loadBalancerSourceRanges'] = ApiClient.convertToType(data['loadBalancerSourceRanges'], ['String']);
      }
      if (data.hasOwnProperty('ports')) {
        obj['ports'] = ApiClient.convertToType(data['ports'], [V1ServicePort]);
      }
      if (data.hasOwnProperty('selector')) {
        obj['selector'] = ApiClient.convertToType(data['selector'], {'String': 'String'});
      }
      if (data.hasOwnProperty('sessionAffinity')) {
        obj['sessionAffinity'] = ApiClient.convertToType(data['sessionAffinity'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are \"None\", empty string (\"\"), or a valid IP address. \"None\" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
   * @member {String} clusterIP
   */
  exports.prototype['clusterIP'] = undefined;
  /**
   * deprecatedPublicIPs is deprecated and replaced by the externalIPs field with almost the exact same semantics.  This field is retained in the v1 API for compatibility until at least 8/20/2016.  It will be removed from any new API revisions.  If both deprecatedPublicIPs *and* externalIPs are set, deprecatedPublicIPs is used.
   * @member {Array.<String>} deprecatedPublicIPs
   */
  exports.prototype['deprecatedPublicIPs'] = undefined;
  /**
   * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.  A previous form of this functionality exists as the deprecatedPublicIPs field.  When using this field, callers should also clear the deprecatedPublicIPs field.
   * @member {Array.<String>} externalIPs
   */
  exports.prototype['externalIPs'] = undefined;
  /**
   * externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid DNS name and requires Type to be ExternalName.
   * @member {String} externalName
   */
  exports.prototype['externalName'] = undefined;
  /**
   * Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
   * @member {String} loadBalancerIP
   */
  exports.prototype['loadBalancerIP'] = undefined;
  /**
   * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature.\" More info: http://kubernetes.io/docs/user-guide/services-firewalls
   * @member {Array.<String>} loadBalancerSourceRanges
   */
  exports.prototype['loadBalancerSourceRanges'] = undefined;
  /**
   * The list of ports that are exposed by this service. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1ServicePort>} ports
   */
  exports.prototype['ports'] = undefined;
  /**
   * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: http://kubernetes.io/docs/user-guide/services#overview
   * @member {Object.<String, String>} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * Supports \"ClientIP\" and \"None\". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
   * @member {String} sessionAffinity
   */
  exports.prototype['sessionAffinity'] = undefined;
  /**
   * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. \"ExternalName\" maps to the specified externalName. \"ClusterIP\" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is \"None\", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. \"NodePort\" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. \"LoadBalancer\" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: http://kubernetes.io/docs/user-guide/services#overview
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


