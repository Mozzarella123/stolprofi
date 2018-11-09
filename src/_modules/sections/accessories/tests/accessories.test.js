'use strict';

import Accessories from '../accessories';

describe('Accessories View', function() {

  beforeEach(() => {
    this.accessories = new Accessories();
  });

  it('Should run a few assertions', () => {
    expect(this.accessories);
  });

});
