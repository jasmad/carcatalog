'use strict';

/**
 * @ngdoc function
 * @name carCatalogApp.controller:CompareCtrl
 * @description
 * # CompareCtrl
 * Controller of the carCatalogApp
 */
angular.module('carCatalogApp')
  .controller('CompareCtrl', function ($scope, $routeParams, $timeout, $location, InventoryFactory) {
  	var code1 = $routeParams.code;
  	var code2 = $routeParams.code2;
  	var code3 = $routeParams.code3;
  	var codes = [code1, code2, code3]; 
  	console.log("init codes", codes);
  	var _self = this;
  	InventoryFactory.getCarList().then(function(carList){
    	$timeout(function() {
    		$scope.carSearchList = carList;
    	});
    });
	InventoryFactory.getCarsByCodes(codes).then(function(cars){
		$timeout (function () {
			if(cars.length < 3)
			{	
				var diff = 3 - cars.length;
				while(diff > 0)
				{
					cars.push({});
					diff--;
				}
				$scope.carComparisonList = cars;
			}
			else
			{
				$scope.carComparisonList = cars;
			}
		});
	});
	$scope.refreshComparision = function(index, code) {
		console.log("index", index);
		console.log("codes", codes);
		codes[index] = code;
		var urlPath = '';
		
		urlPath = codes.filter(function(c){
			return c;
		}).join('/');
		
		console.log("urlPath", urlPath);
		$location.path('/compare/'+urlPath);
	};

  });
