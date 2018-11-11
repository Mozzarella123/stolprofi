// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';
import Header from '../_modules/sections/header/header';

$(document).ready(()=>{
  let header = new Header();
});
