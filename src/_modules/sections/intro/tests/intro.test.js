'use strict';

import Intro from '../intro';

describe('Intro View', function() {

  beforeEach(() => {
    this.intro = new Intro();
  });

  it('Should run a few assertions', () => {
    expect(this.intro);
  });

});
