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
    instance = new KubernetesJsClient.BatchV1Api();
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

  describe('BatchV1Api', function() {
    describe('createNamespacedJob', function() {
      it('should call createNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test createNamespacedJob
        //instance.createNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedJob', function() {
      it('should call deleteCollectionNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedJob
        //instance.deleteCollectionNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedJob', function() {
      it('should call deleteNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedJob
        //instance.deleteNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJobForAllNamespaces', function() {
      it('should call listJobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listJobForAllNamespaces
        //instance.listJobForAllNamespaces(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedJob', function() {
      it('should call listNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test listNamespacedJob
        //instance.listNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedJob', function() {
      it('should call patchNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedJob
        //instance.patchNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedJobStatus', function() {
      it('should call patchNamespacedJobStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedJobStatus
        //instance.patchNamespacedJobStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedJob', function() {
      it('should call readNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test readNamespacedJob
        //instance.readNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedJobStatus', function() {
      it('should call readNamespacedJobStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedJobStatus
        //instance.readNamespacedJobStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedJob', function() {
      it('should call replaceNamespacedJob successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedJob
        //instance.replaceNamespacedJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedJobStatus', function() {
      it('should call replaceNamespacedJobStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedJobStatus
        //instance.replaceNamespacedJobStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
