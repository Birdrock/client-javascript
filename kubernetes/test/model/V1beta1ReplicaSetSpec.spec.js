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
    instance = new KubernetesJsClient.V1beta1ReplicaSetSpec();
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

  describe('V1beta1ReplicaSetSpec', function() {
    it('should create an instance of V1beta1ReplicaSetSpec', function() {
      // uncomment below and update the code to test V1beta1ReplicaSetSpec
      //var instane = new KubernetesJsClient.V1beta1ReplicaSetSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1beta1ReplicaSetSpec);
    });

    it('should have the property minReadySeconds (base name: "minReadySeconds")', function() {
      // uncomment below and update the code to test the property minReadySeconds
      //var instane = new KubernetesJsClient.V1beta1ReplicaSetSpec();
      //expect(instance).to.be();
    });

    it('should have the property replicas (base name: "replicas")', function() {
      // uncomment below and update the code to test the property replicas
      //var instane = new KubernetesJsClient.V1beta1ReplicaSetSpec();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instane = new KubernetesJsClient.V1beta1ReplicaSetSpec();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KubernetesJsClient.V1beta1ReplicaSetSpec();
      //expect(instance).to.be();
    });

  });

}));