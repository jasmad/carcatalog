'use strict';

/**
 * @ngdoc service
 * @name carCatalogApp.InventoryFactory
 * @description
 * # InventoryFactory
 * Factory in the carCatalogApp.
 */
angular.module('carCatalogApp')
  .factory('InventoryFactory', function ($http, $q, filterFilter) {

    return {
      getCarList: function () {
        var deferred = $q.defer();
        $http.get('car-companies.json')
          .success(function(data){
            deferred.resolve(data.cars);
          })
          .error(function(data, status, headers, config) {
            deferred.reject("Error: request returned status " + status);
          });
          return deferred.promise;
      },
      getCarByCode: function(code){
        var deferred = $q.defer();
        $http.get('car-companies.json')
          .success(function(data){
            // code: "b05dbf3b-ca13-4c0e-becf-c534c201f1ec"
            var filteredCar = filterFilter(data.cars, {code: "b05dbf3b-ca13-4c0e-becf-c534c201f1ec"});
            if(filteredCar)
            {
              
              deferred.resolve(filteredCar[0]);
            }
            else
            {
              deferred.resolve(null);
            }
          })
          .error(function(data, status, headers, config) {
            deferred.reject("Error: request returned status " + status);
          });
          return deferred.promise;
      },
      getCarsByCodes: function (codes) {
        var deferred = $q.defer();
        $http.get('car-companies.json')
          .success(function(data){
            // {code: "b05dbf3b-ca13-4c0e-becf-c534c201f1ec"}
            var filteredCar = filterFilter(data.cars, function(car, index, carList){
              return codes.indexOf(car.code) > -1;
            });
            deferred.resolve(filteredCar);
          })
          .error(function(data, status, headers, config) {
            deferred.reject("Error: request returned status " + status);
          });
          return deferred.promise;
      }
    };
  });
