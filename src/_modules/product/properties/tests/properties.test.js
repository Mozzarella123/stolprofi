'use strict';

import Properties from '../properties';

describe('Properties View', function() {

  beforeEach(() => {
    this.properties = new Properties();
  });

  it('Should run a few assertions', () => {
    expect(this.properties);
  });

});
