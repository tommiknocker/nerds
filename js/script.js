'use strict';

  var writeUs = document.querySelector(".contact-us-btn");
	var openForm = document.querySelector(".modal-form");

	writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	openForm.classList.toggle("form-show");});
