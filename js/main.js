"use strict";

const mask = document.getElementById('mask');
const navi = document.getElementById('navi');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
  mask.classList.toggle('open');
  navi.classList.toggle('open');
  hamburger.classList.toggle('open');
});