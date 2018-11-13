'use strict';

import Lead from '../lead';

describe('Lead View', function() {

  beforeEach(() => {
    this.lead = new Lead();
  });

  it('Should run a few assertions', () => {
    expect(this.lead);
  });

});
