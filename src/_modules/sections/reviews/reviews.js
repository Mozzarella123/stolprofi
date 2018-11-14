'use strict';
import $ from 'jquery';
import 'slick-carousel';
export default class Reviews {
  constructor() {
    $('#reviews .slider').slick({
      dots : false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  }
}
