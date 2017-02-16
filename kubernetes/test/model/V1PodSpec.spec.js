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
    instance = new KubernetesJsClient.V1PodSpec();
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

  describe('V1PodSpec', function() {
    it('should create an instance of V1PodSpec', function() {
      // uncomment below and update the code to test V1PodSpec
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1PodSpec);
    });

    it('should have the property activeDeadlineSeconds (base name: "activeDeadlineSeconds")', function() {
      // uncomment below and update the code to test the property activeDeadlineSeconds
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property containers (base name: "containers")', function() {
      // uncomment below and update the code to test the property containers
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property dnsPolicy (base name: "dnsPolicy")', function() {
      // uncomment below and update the code to test the property dnsPolicy
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostIPC (base name: "hostIPC")', function() {
      // uncomment below and update the code to test the property hostIPC
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostNetwork (base name: "hostNetwork")', function() {
      // uncomment below and update the code to test the property hostNetwork
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostPID (base name: "hostPID")', function() {
      // uncomment below and update the code to test the property hostPID
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property imagePullSecrets (base name: "imagePullSecrets")', function() {
      // uncomment below and update the code to test the property imagePullSecrets
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property nodeName (base name: "nodeName")', function() {
      // uncomment below and update the code to test the property nodeName
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property nodeSelector (base name: "nodeSelector")', function() {
      // uncomment below and update the code to test the property nodeSelector
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property restartPolicy (base name: "restartPolicy")', function() {
      // uncomment below and update the code to test the property restartPolicy
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property securityContext (base name: "securityContext")', function() {
      // uncomment below and update the code to test the property securityContext
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property serviceAccount (base name: "serviceAccount")', function() {
      // uncomment below and update the code to test the property serviceAccount
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property serviceAccountName (base name: "serviceAccountName")', function() {
      // uncomment below and update the code to test the property serviceAccountName
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property subdomain (base name: "subdomain")', function() {
      // uncomment below and update the code to test the property subdomain
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property terminationGracePeriodSeconds (base name: "terminationGracePeriodSeconds")', function() {
      // uncomment below and update the code to test the property terminationGracePeriodSeconds
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instane = new KubernetesJsClient.V1PodSpec();
      //expect(instance).to.be();
    });

  });

}));
