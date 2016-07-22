'use strict';

describe('Controller: CarlistCtrl', function () {

  // load the controller's module
  beforeEach(module('carCatalogApp'));

  var CarlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarlistCtrl = $controller('CarlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarlistCtrl.awesomeThings.length).toBe(3);
  });
});
