'use strict';

  var writeUs = document.querySelector(".contact-us-btn");
	var openForm = document.querySelector(".modal-form");
  var closeForm = openForm.querySelector(".modal-form-close");
  var login = openForm.querySelector("[name=username]");

	writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	openForm.classList.add("form-show");
  login.focus();});

  closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  openForm.classList.remove("form-show");});

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  openForm.classList.remove("form-show");}   });
