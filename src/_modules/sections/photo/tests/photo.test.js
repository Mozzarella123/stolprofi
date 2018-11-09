'use strict';

import Photo from '../photo';

describe('Photo View', function() {

  beforeEach(() => {
    this.photo = new Photo();
  });

  it('Should run a few assertions', () => {
    expect(this.photo);
  });

});
