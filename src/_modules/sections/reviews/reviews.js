'use strict';
import $ from 'jquery';
import 'slick-carousel';
export default class Reviews {
  constructor() {
    $('#reviews .slider').slick({
      dots : false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });
  }
}
