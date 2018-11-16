'use strict';
import $ from 'jquery';
import 'slick-carousel';
export default class Clients {
  constructor() {
    $('#clients .slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows : false,
      dots: true,
      appendDots : $('#clients .slider-nav'),
      customPaging : function (slider, pageIndex) {
        return '<button></button>';
      }
    });
  }
}
