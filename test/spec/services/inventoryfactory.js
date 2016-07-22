'use strict';

describe('Service: InventoryFactory', function () {

  // load the service's module
  beforeEach(module('carCatalogApp'));

  // instantiate service
  var InventoryFactory;
  beforeEach(inject(function (_InventoryFactory_) {
    InventoryFactory = _InventoryFactory_;
  }));

  it('should do something', function () {
    expect(!!InventoryFactory).toBe(true);
  });

});
