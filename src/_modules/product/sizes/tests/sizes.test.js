'use strict';

import Sizes from '../sizes';

describe('Sizes View', function() {

  beforeEach(() => {
    this.sizes = new Sizes();
  });

  it('Should run a few assertions', () => {
    expect(this.sizes);
  });

});
