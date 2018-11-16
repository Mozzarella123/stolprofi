'use strict';

import ImageBlock from '../image_block';

describe('ImageBlock View', function() {

  beforeEach(() => {
    this.imageBlock = new ImageBlock();
  });

  it('Should run a few assertions', () => {
    expect(this.imageBlock);
  });

});
