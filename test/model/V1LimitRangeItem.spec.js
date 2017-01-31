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
    instance = new Kubernetes.V1LimitRangeItem();
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

  describe('V1LimitRangeItem', function() {
    it('should create an instance of V1LimitRangeItem', function() {
      // uncomment below and update the code to test V1LimitRangeItem
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be.a(Kubernetes.V1LimitRangeItem);
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be();
    });

    it('should have the property defaultRequest (base name: "defaultRequest")', function() {
      // uncomment below and update the code to test the property defaultRequest
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be();
    });

    it('should have the property max (base name: "max")', function() {
      // uncomment below and update the code to test the property max
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be();
    });

    it('should have the property maxLimitRequestRatio (base name: "maxLimitRequestRatio")', function() {
      // uncomment below and update the code to test the property maxLimitRequestRatio
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be();
    });

    it('should have the property min (base name: "min")', function() {
      // uncomment below and update the code to test the property min
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Kubernetes.V1LimitRangeItem();
      //expect(instance).to.be();
    });

  });

}));
