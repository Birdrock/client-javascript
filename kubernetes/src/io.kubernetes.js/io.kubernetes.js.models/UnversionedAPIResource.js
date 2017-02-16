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
    root.KubernetesJsClient.UnversionedAPIResource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UnversionedAPIResource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResource
   * @version 1.0-snapshot
   */

  /**
   * Constructs a new <code>UnversionedAPIResource</code>.
   * APIResource specifies the name of a resource and whether it is namespaced.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResource
   * @class
   * @param kind {String} kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
   * @param name {String} name is the name of the resource.
   * @param namespaced {Boolean} namespaced indicates if a resource is namespaced or not.
   */
  var exports = function(kind, name, namespaced) {
    var _this = this;

    _this['kind'] = kind;
    _this['name'] = name;
    _this['namespaced'] = namespaced;
  };

  /**
   * Constructs a <code>UnversionedAPIResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/UnversionedAPIResource} The populated <code>UnversionedAPIResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('namespaced')) {
        obj['namespaced'] = ApiClient.convertToType(data['namespaced'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * name is the name of the resource.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * namespaced indicates if a resource is namespaced or not.
   * @member {Boolean} namespaced
   */
  exports.prototype['namespaced'] = undefined;



  return exports;
}));


