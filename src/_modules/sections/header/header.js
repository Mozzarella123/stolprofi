'use strict';
import $ from 'jquery';

export default class Header {
  constructor() {
    const $window = $(window);
    const $header = $('header');
    $window.scroll(()=>{
      if ($window.scrollTop() > 87) {
        $header.addClass('fixed');
      }
      else {
        $header.removeClass('fixed');
      }
    });
  }
}
