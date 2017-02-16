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
    instance = new KubernetesJsClient.V1ContainerStateTerminated();
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

  describe('V1ContainerStateTerminated', function() {
    it('should create an instance of V1ContainerStateTerminated', function() {
      // uncomment below and update the code to test V1ContainerStateTerminated
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be.a(KubernetesJsClient.V1ContainerStateTerminated);
    });

    it('should have the property containerID (base name: "containerID")', function() {
      // uncomment below and update the code to test the property containerID
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property exitCode (base name: "exitCode")', function() {
      // uncomment below and update the code to test the property exitCode
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finishedAt")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property signal (base name: "signal")', function() {
      // uncomment below and update the code to test the property signal
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "startedAt")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instane = new KubernetesJsClient.V1ContainerStateTerminated();
      //expect(instance).to.be();
    });

  });

}));
