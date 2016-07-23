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
    $scope.carList = [];
    InventoryFactory.getCarList().then(function(carList){
    	$timeout(function() {
    		$scope.carList = carList;
    	});
    });
  });
