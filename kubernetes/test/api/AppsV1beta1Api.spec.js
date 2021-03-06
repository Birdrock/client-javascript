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
    instance = new KubernetesJsClient.AppsV1beta1Api();
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

  describe('AppsV1beta1Api', function() {
    describe('createNamespacedStatefulSet', function() {
      it('should call createNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test createNamespacedStatefulSet
        //instance.createNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedStatefulSet', function() {
      it('should call deleteCollectionNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedStatefulSet
        //instance.deleteCollectionNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedStatefulSet', function() {
      it('should call deleteNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedStatefulSet
        //instance.deleteNamespacedStatefulSet(pet, function(error) {
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
    describe('listNamespacedStatefulSet', function() {
      it('should call listNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test listNamespacedStatefulSet
        //instance.listNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listStatefulSetForAllNamespaces', function() {
      it('should call listStatefulSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listStatefulSetForAllNamespaces
        //instance.listStatefulSetForAllNamespaces(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedStatefulSet', function() {
      it('should call patchNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedStatefulSet
        //instance.patchNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedStatefulSetStatus', function() {
      it('should call patchNamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedStatefulSetStatus
        //instance.patchNamespacedStatefulSetStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedStatefulSet', function() {
      it('should call readNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test readNamespacedStatefulSet
        //instance.readNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedStatefulSetStatus', function() {
      it('should call readNamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedStatefulSetStatus
        //instance.readNamespacedStatefulSetStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedStatefulSet', function() {
      it('should call replaceNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedStatefulSet
        //instance.replaceNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedStatefulSetStatus', function() {
      it('should call replaceNamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedStatefulSetStatus
        //instance.replaceNamespacedStatefulSetStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
