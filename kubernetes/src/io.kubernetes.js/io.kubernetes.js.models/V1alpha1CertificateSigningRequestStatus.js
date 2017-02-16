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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1alpha1CertificateSigningRequestCondition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1alpha1CertificateSigningRequestCondition'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1alpha1CertificateSigningRequestStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1alpha1CertificateSigningRequestCondition);
  }
}(this, function(ApiClient, V1alpha1CertificateSigningRequestCondition) {
  'use strict';




  /**
   * The V1alpha1CertificateSigningRequestStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1alpha1CertificateSigningRequestStatus
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1alpha1CertificateSigningRequestStatus</code>.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1CertificateSigningRequestStatus
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1alpha1CertificateSigningRequestStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1CertificateSigningRequestStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1CertificateSigningRequestStatus} The populated <code>V1alpha1CertificateSigningRequestStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1alpha1CertificateSigningRequestCondition]);
      }
    }
    return obj;
  }

  /**
   * If request was approved, the controller will place the issued certificate here.
   * @member {String} certificate
   */
  exports.prototype['certificate'] = undefined;
  /**
   * Conditions applied to the request, such as approval or denial.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1CertificateSigningRequestCondition>} conditions
   */
  exports.prototype['conditions'] = undefined;



  return exports;
}));

