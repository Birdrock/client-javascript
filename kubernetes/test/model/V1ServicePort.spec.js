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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V1ServicePort();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1ServicePort', function() {
    it('should create an instance of V1ServicePort', function() {
      // uncomment below and update the code to test V1ServicePort
      //var instane = new KubernetesJsClient.V1ServicePort();
      //expect(instance).to.be.a(KubernetesJsClient.V1ServicePort);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KubernetesJsClient.V1ServicePort();
      //expect(instance).to.be();
    });

    it('should have the property nodePort (base name: "nodePort")', function() {
      // uncomment below and update the code to test the property nodePort
      //var instane = new KubernetesJsClient.V1ServicePort();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instane = new KubernetesJsClient.V1ServicePort();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instane = new KubernetesJsClient.V1ServicePort();
      //expect(instance).to.be();
    });

    it('should have the property targetPort (base name: "targetPort")', function() {
      // uncomment below and update the code to test the property targetPort
      //var instane = new KubernetesJsClient.V1ServicePort();
      //expect(instance).to.be();
    });

  });

}));
