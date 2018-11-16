// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';
import Header from '../_modules/sections/header/header';
import Reviews from '../_modules/sections/reviews/reviews';
import Clients from '../_modules/sections/clients/clients';
import Photo from '../_modules/sections/photo/photo'

export const $window = $(window);
$(document).ready(()=>{
  let header = new Header();
  let reviews = new Reviews();
  let clients = new Clients();
  let photo = new Photo();
});
