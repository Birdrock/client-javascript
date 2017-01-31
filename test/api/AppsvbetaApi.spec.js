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
    instance = new Kubernetes.AppsvbetaApi();
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

  describe('AppsvbetaApi', function() {
    describe('createAppsV1beta1NamespacedStatefulSet', function() {
      it('should call createAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test createAppsV1beta1NamespacedStatefulSet
        //instance.createAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppsV1beta1CollectionNamespacedStatefulSet', function() {
      it('should call deleteAppsV1beta1CollectionNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteAppsV1beta1CollectionNamespacedStatefulSet
        //instance.deleteAppsV1beta1CollectionNamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppsV1beta1NamespacedStatefulSet', function() {
      it('should call deleteAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteAppsV1beta1NamespacedStatefulSet
        //instance.deleteAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppsV1beta1APIResources', function() {
      it('should call getAppsV1beta1APIResources successfully', function(done) {
        //uncomment below and update the code to test getAppsV1beta1APIResources
        //instance.getAppsV1beta1APIResources(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsV1beta1NamespacedStatefulSet', function() {
      it('should call listAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test listAppsV1beta1NamespacedStatefulSet
        //instance.listAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsV1beta1StatefulSetForAllNamespaces', function() {
      it('should call listAppsV1beta1StatefulSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listAppsV1beta1StatefulSetForAllNamespaces
        //instance.listAppsV1beta1StatefulSetForAllNamespaces(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedStatefulSet', function() {
      it('should call patchAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedStatefulSet
        //instance.patchAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedStatefulSetStatus', function() {
      it('should call patchAppsV1beta1NamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedStatefulSetStatus
        //instance.patchAppsV1beta1NamespacedStatefulSetStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedStatefulSet', function() {
      it('should call readAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedStatefulSet
        //instance.readAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedStatefulSetStatus', function() {
      it('should call readAppsV1beta1NamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedStatefulSetStatus
        //instance.readAppsV1beta1NamespacedStatefulSetStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedStatefulSet', function() {
      it('should call replaceAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedStatefulSet
        //instance.replaceAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedStatefulSetStatus', function() {
      it('should call replaceAppsV1beta1NamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedStatefulSetStatus
        //instance.replaceAppsV1beta1NamespacedStatefulSetStatus(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1NamespacedStatefulSet', function() {
      it('should call watchAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1NamespacedStatefulSet
        //instance.watchAppsV1beta1NamespacedStatefulSet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1NamespacedStatefulSetList', function() {
      it('should call watchAppsV1beta1NamespacedStatefulSetList successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1NamespacedStatefulSetList
        //instance.watchAppsV1beta1NamespacedStatefulSetList(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1StatefulSetListForAllNamespaces', function() {
      it('should call watchAppsV1beta1StatefulSetListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1StatefulSetListForAllNamespaces
        //instance.watchAppsV1beta1StatefulSetListForAllNamespaces(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));