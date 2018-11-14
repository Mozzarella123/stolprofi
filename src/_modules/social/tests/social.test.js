'use strict';

import Social from '../social';

describe('Social View', function() {

  beforeEach(() => {
    this.social = new Social();
  });

  it('Should run a few assertions', () => {
    expect(this.social);
  });

});
