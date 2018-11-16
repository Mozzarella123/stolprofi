'use strict';

import Price from '../price';

describe('Price View', function() {

  beforeEach(() => {
    this.price = new Price();
  });

  it('Should run a few assertions', () => {
    expect(this.price);
  });

});
