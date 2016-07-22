'use strict';

/**
 * @ngdoc function
 * @name carCatalogApp.controller:CarlistCtrl
 * @description
 * # CarlistCtrl
 * List all cars
 */
angular.module('carCatalogApp')
  .controller('CarlistCtrl', function ($scope, $timeout, InventoryFactory) {
    console.log('CarlistCtrl');
    InventoryFactory.getCarList().then(function(carList){
    	console.log("data", carList);
    	$timeout(function() {
    		$scope.carList = carList;
    	});
    });
  });
