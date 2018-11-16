'use strict';

import Description from '../description';

describe('Description View', function() {

  beforeEach(() => {
    this.description = new Description();
  });

  it('Should run a few assertions', () => {
    expect(this.description);
  });

});
