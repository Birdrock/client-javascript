/**
 * Kubernetes
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: unversioned
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UnversionedTime', 'model/V1EventSource', 'model/V1ObjectMeta', 'model/V1ObjectReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnversionedTime'), require('./V1EventSource'), require('./V1ObjectMeta'), require('./V1ObjectReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Kubernetes) {
      root.Kubernetes = {};
    }
    root.Kubernetes.V1Event = factory(root.Kubernetes.ApiClient, root.Kubernetes.UnversionedTime, root.Kubernetes.V1EventSource, root.Kubernetes.V1ObjectMeta, root.Kubernetes.V1ObjectReference);
  }
}(this, function(ApiClient, UnversionedTime, V1EventSource, V1ObjectMeta, V1ObjectReference) {
  'use strict';




  /**
   * The V1Event model module.
   * @module model/V1Event
   * @version unversioned
   */

  /**
   * Constructs a new <code>V1Event</code>.
   * Event is a report of an event somewhere in the cluster.
   * @alias module:model/V1Event
   * @class
   * @param involvedObject {module:model/V1ObjectReference} The object that this event is about.
   * @param metadata {module:model/V1ObjectMeta} Standard object's metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   */
  var exports = function(involvedObject, metadata) {
    var _this = this;




    _this['involvedObject'] = involvedObject;



    _this['metadata'] = metadata;



  };

  /**
   * Constructs a <code>V1Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Event} obj Optional instance to populate.
   * @return {module:model/V1Event} The populated <code>V1Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('firstTimestamp')) {
        obj['firstTimestamp'] = UnversionedTime.constructFromObject(data['firstTimestamp']);
      }
      if (data.hasOwnProperty('involvedObject')) {
        obj['involvedObject'] = V1ObjectReference.constructFromObject(data['involvedObject']);
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('lastTimestamp')) {
        obj['lastTimestamp'] = UnversionedTime.constructFromObject(data['lastTimestamp']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = V1EventSource.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * The number of times this event has occurred.
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
   * @member {module:model/UnversionedTime} firstTimestamp
   */
  exports.prototype['firstTimestamp'] = undefined;
  /**
   * The object that this event is about.
   * @member {module:model/V1ObjectReference} involvedObject
   */
  exports.prototype['involvedObject'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * The time at which the most recent occurrence of this event was recorded.
   * @member {module:model/UnversionedTime} lastTimestamp
   */
  exports.prototype['lastTimestamp'] = undefined;
  /**
   * A human-readable description of the status of this operation.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Standard object's metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:model/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The component reporting this event. Should be a short machine understandable string.
   * @member {module:model/V1EventSource} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Type of this event (Normal, Warning), new types could be added in the future
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


