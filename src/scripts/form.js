import $ from "jquery";

function validateInputName() {
  const $inputName = $("#input-name");
  const pattern = new RegExp($inputName.attr("pattern"));
  const isValidName = pattern.test($inputName.val());

  if (!isValidName) {
    $inputName.attr("style", "border-color: #dc2626");
  } else {
    $inputName.attr("style", "border-color: #1e40af");
  }

  return isValidName;
}

function validateInputPrice() {
  const $inputPrice = $("#input-price");
  const patternPrice = new RegExp($inputPrice.attr("pattern"));
  const isValidPrice = patternPrice.test($inputPrice.val());

  if (!isValidPrice) {
    $inputPrice.attr("style", "border-color: #dc2626");
  } else {
    $inputPrice.attr("style", "border-color: #1e40af");
  }

  return isValidPrice;
}

function validateInputImage() {
  const $inputImage = $("#input-image");
  const patternImage = new RegExp($inputImage.attr("pattern"));
  const isValidImage = patternImage.test($inputImage.val());

  if (!isValidImage) {
    $inputImage.attr("style", "border-color: #dc2626");
  } else {
    $inputImage.attr("style", "border-color: #1e40af");
  }

  return isValidImage;
}

export function resetForm() {
  $.each($(".input"), function (_, input) {
    setTimeout(() => {
      $(input).val("").attr("style", "border-color: #1e40af");
    });
  });
}

$("#input-name, #input-price").on("input", function () {
  validateInputName();
});

$("#input-price").on("input", function () {
  validateInputPrice();
});

$("#input-image").on("input", function () {
  validateInputImage();
});

$("button[type='submit']").click(function (e) {
  if (!(validateInputName() && validateInputName() && validateInputImage())) {
    e.preventDefault();
    alert("Por favor, corrija os erros no formulário.");
    resetForm();
  }
});

$("button[type='reset']").click(function (e) {
  resetForm();
  e.preventDefault();
});
