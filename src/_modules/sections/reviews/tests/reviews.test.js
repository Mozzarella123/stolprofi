'use strict';

import Reviews from '../reviews';

describe('Reviews View', function() {

  beforeEach(() => {
    this.reviews = new Reviews();
  });

  it('Should run a few assertions', () => {
    expect(this.reviews);
  });

});
