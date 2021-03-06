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
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ContainerImage = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1ContainerImage model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ContainerImage
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>V1ContainerImage</code>.
   * Describe a container image
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerImage
   * @class
   * @param names {Array.<String>} Names by which this image is known. e.g. [\"gcr.io/google_containers/hyperkube:v1.0.7\", \"dockerhub.io/google_containers/hyperkube:v1.0.7\"]
   */
  var exports = function(names) {
    var _this = this;

    _this['names'] = names;

  };

  /**
   * Constructs a <code>V1ContainerImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerImage} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerImage} The populated <code>V1ContainerImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('names')) {
        obj['names'] = ApiClient.convertToType(data['names'], ['String']);
      }
      if (data.hasOwnProperty('sizeBytes')) {
        obj['sizeBytes'] = ApiClient.convertToType(data['sizeBytes'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Names by which this image is known. e.g. [\"gcr.io/google_containers/hyperkube:v1.0.7\", \"dockerhub.io/google_containers/hyperkube:v1.0.7\"]
   * @member {Array.<String>} names
   */
  exports.prototype['names'] = undefined;
  /**
   * The size of the image in bytes.
   * @member {Number} sizeBytes
   */
  exports.prototype['sizeBytes'] = undefined;



  return exports;
}));


