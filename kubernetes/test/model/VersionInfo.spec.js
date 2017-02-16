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
    instance = new KubernetesJsClient.VersionInfo();
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

  describe('VersionInfo', function() {
    it('should create an instance of VersionInfo', function() {
      // uncomment below and update the code to test VersionInfo
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be.a(KubernetesJsClient.VersionInfo);
    });

    it('should have the property buildDate (base name: "buildDate")', function() {
      // uncomment below and update the code to test the property buildDate
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property compiler (base name: "compiler")', function() {
      // uncomment below and update the code to test the property compiler
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property gitCommit (base name: "gitCommit")', function() {
      // uncomment below and update the code to test the property gitCommit
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property gitTreeState (base name: "gitTreeState")', function() {
      // uncomment below and update the code to test the property gitTreeState
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property gitVersion (base name: "gitVersion")', function() {
      // uncomment below and update the code to test the property gitVersion
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property goVersion (base name: "goVersion")', function() {
      // uncomment below and update the code to test the property goVersion
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property major (base name: "major")', function() {
      // uncomment below and update the code to test the property major
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property minor (base name: "minor")', function() {
      // uncomment below and update the code to test the property minor
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instane = new KubernetesJsClient.VersionInfo();
      //expect(instance).to.be();
    });

  });

}));
