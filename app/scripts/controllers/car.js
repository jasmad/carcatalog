'use strict';

/**
 * @ngdoc function
 * @name carCatalogApp.controller:CarCtrl
 * @description
 * # CarCtrl
 * Controller of the carCatalogApp
 */
angular.module('carCatalogApp')
  .controller('CarCtrl', function ($scope, $routeParams, $timeout, InventoryFactory) {
  	var code = $routeParams.code;
  	InventoryFactory.getCarByCode(code).then(function(car){
  		console.log(car);
  		$timeout(function(){
  			$scope.car = car;
  		})
  	})
  });
