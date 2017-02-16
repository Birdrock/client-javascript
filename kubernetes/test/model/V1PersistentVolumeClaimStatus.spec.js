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
    instance = new KubernetesJsClient.V1PersistentVolumeClaimStatus();
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

  describe('V1PersistentVolumeClaimStatus', function() {
    it('should create an instance of V1PersistentVolumeClaimStatus', function() {
      // uncomment below and update the code to test V1PersistentVolumeClaimStatus
      //var instane = new KubernetesJsClient.V1PersistentVolumeClaimStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V1PersistentVolumeClaimStatus);
    });

    it('should have the property accessModes (base name: "accessModes")', function() {
      // uncomment below and update the code to test the property accessModes
      //var instane = new KubernetesJsClient.V1PersistentVolumeClaimStatus();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new KubernetesJsClient.V1PersistentVolumeClaimStatus();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instane = new KubernetesJsClient.V1PersistentVolumeClaimStatus();
      //expect(instance).to.be();
    });

  });

}));
