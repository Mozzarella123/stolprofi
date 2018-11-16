'use strict';

import Colors from '../colors';

describe('Colors View', function() {

  beforeEach(() => {
    this.colors = new Colors();
  });

  it('Should run a few assertions', () => {
    expect(this.colors);
  });

});
