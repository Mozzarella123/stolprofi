'use strict';
import $ from 'jquery';
import 'slick-carousel';

export default class Photo {
  constructor() {
    $('#photo .slider').slick({
      dots : true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
      appendDots: $('#photo .slider-nav')
    });
  }
}
