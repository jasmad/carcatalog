'use strict';

/**
 * @ngdoc overview
 * @name carCatalogApp
 * @description
 * # carCatalogApp
 *
 * Main module of the application.
 */
angular
  .module('carCatalogApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cars/', {
        templateUrl: 'views/carlist.html',
        controller: 'CarlistCtrl',
        controllerAs: 'carList'
      })
      .when('/cars/:code', {
        templateUrl: 'views/car.html',
        controller: 'CarCtrl',
        controllerAs: 'Car'
      })
      .when('/compare', {
        templateUrl: 'views/compare.html',
        controller: 'CompareCtrl',
        controllerAs: 'compare'
      })
      .otherwise({
        redirectTo: '/cars/'
      });
  });
