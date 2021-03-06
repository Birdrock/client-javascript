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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/UnversionedLabelSelector', 'io.kubernetes.js/io.kubernetes.js.models/V1PodTemplateSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedLabelSelector'), require('./V1PodTemplateSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1DaemonSetSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.UnversionedLabelSelector, root.KubernetesJsClient.V1PodTemplateSpec);
  }
}(this, function(ApiClient, UnversionedLabelSelector, V1PodTemplateSpec) {
  'use strict';




  /**
   * The V1beta1DaemonSetSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetSpec
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1DaemonSetSpec</code>.
   * DaemonSetSpec is the specification of a daemon set.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetSpec
   * @class
   * @param template {module:io.kubernetes.js/io.kubernetes.js.models/V1PodTemplateSpec} Template is the object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: http://kubernetes.io/docs/user-guide/replication-controller#pod-template
   */
  var exports = function(template) {
    var _this = this;


    _this['template'] = template;
  };

  /**
   * Constructs a <code>V1beta1DaemonSetSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetSpec} The populated <code>V1beta1DaemonSetSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('selector')) {
        obj['selector'] = UnversionedLabelSelector.constructFromObject(data['selector']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = V1PodTemplateSpec.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * Selector is a label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedLabelSelector} selector
   */
  exports.prototype['selector'] = undefined;
  /**
   * Template is the object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: http://kubernetes.io/docs/user-guide/replication-controller#pod-template
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1PodTemplateSpec} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));


