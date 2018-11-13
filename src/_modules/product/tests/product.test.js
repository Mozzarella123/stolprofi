'use strict';

import Product from '../product';

describe('Product View', function() {

  beforeEach(() => {
    this.product = new Product();
  });

  it('Should run a few assertions', () => {
    expect(this.product);
  });

});
