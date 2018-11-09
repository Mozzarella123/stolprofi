'use strict';

import Options from '../options';

describe('Options View', function() {

  beforeEach(() => {
    this.options = new Options();
  });

  it('Should run a few assertions', () => {
    expect(this.options);
  });

});
