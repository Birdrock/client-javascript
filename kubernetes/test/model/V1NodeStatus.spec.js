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
    instance = new KubernetesJsClient.V1NodeStatus();
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

  describe('V1NodeStatus', function() {
    it('should create an instance of V1NodeStatus', function() {
      // uncomment below and update the code to test V1NodeStatus
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V1NodeStatus);
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property allocatable (base name: "allocatable")', function() {
      // uncomment below and update the code to test the property allocatable
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property daemonEndpoints (base name: "daemonEndpoints")', function() {
      // uncomment below and update the code to test the property daemonEndpoints
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property nodeInfo (base name: "nodeInfo")', function() {
      // uncomment below and update the code to test the property nodeInfo
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property volumesAttached (base name: "volumesAttached")', function() {
      // uncomment below and update the code to test the property volumesAttached
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property volumesInUse (base name: "volumesInUse")', function() {
      // uncomment below and update the code to test the property volumesInUse
      //var instane = new KubernetesJsClient.V1NodeStatus();
      //expect(instance).to.be();
    });

  });

}));
