'use strict';

import Video from '../video';

describe('Video View', function() {

  beforeEach(() => {
    this.video = new Video();
  });

  it('Should run a few assertions', () => {
    expect(this.video);
  });

});
