/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    factory(root.expect, root.Kubernetes);
  }
}(this, function(expect, Kubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Kubernetes.V1PodSpec();
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
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be.a(Kubernetes.V1PodSpec);
    });

    it('should have the property activeDeadlineSeconds (base name: "activeDeadlineSeconds")', function() {
      // uncomment below and update the code to test the property activeDeadlineSeconds
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property affinity (base name: "affinity")', function() {
      // uncomment below and update the code to test the property affinity
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property containers (base name: "containers")', function() {
      // uncomment below and update the code to test the property containers
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property dnsPolicy (base name: "dnsPolicy")', function() {
      // uncomment below and update the code to test the property dnsPolicy
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostIPC (base name: "hostIPC")', function() {
      // uncomment below and update the code to test the property hostIPC
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostNetwork (base name: "hostNetwork")', function() {
      // uncomment below and update the code to test the property hostNetwork
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostPID (base name: "hostPID")', function() {
      // uncomment below and update the code to test the property hostPID
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostname (base name: "hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property imagePullSecrets (base name: "imagePullSecrets")', function() {
      // uncomment below and update the code to test the property imagePullSecrets
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property nodeName (base name: "nodeName")', function() {
      // uncomment below and update the code to test the property nodeName
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property nodeSelector (base name: "nodeSelector")', function() {
      // uncomment below and update the code to test the property nodeSelector
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property restartPolicy (base name: "restartPolicy")', function() {
      // uncomment below and update the code to test the property restartPolicy
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property schedulername (base name: "schedulername")', function() {
      // uncomment below and update the code to test the property schedulername
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property securityContext (base name: "securityContext")', function() {
      // uncomment below and update the code to test the property securityContext
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property serviceAccount (base name: "serviceAccount")', function() {
      // uncomment below and update the code to test the property serviceAccount
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property serviceAccountName (base name: "serviceAccountName")', function() {
      // uncomment below and update the code to test the property serviceAccountName
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property subdomain (base name: "subdomain")', function() {
      // uncomment below and update the code to test the property subdomain
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property terminationGracePeriodSeconds (base name: "terminationGracePeriodSeconds")', function() {
      // uncomment below and update the code to test the property terminationGracePeriodSeconds
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instane = new Kubernetes.V1PodSpec();
      //expect(instance).to.be();
    });

  });

}));
