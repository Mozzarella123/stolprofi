'use strict';

import Clients from '../clients';

describe('Clients View', function() {

  beforeEach(() => {
    this.clients = new Clients();
  });

  it('Should run a few assertions', () => {
    expect(this.clients);
  });

});
