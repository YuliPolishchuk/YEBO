document.addEventListener('DOMContentLoaded', function() {
  let radioInputs = document.querySelectorAll('input[type=radio][name=point]');
  let radioChange = (e) => {
      let labels = document.querySelectorAll('.twitter__label');
      labels.forEach((label) => label.style.display = (label.getAttribute('for') === e.target.id) ? 'block' : 'none');
  };
  radioInputs.forEach((radio) => {
      radio.addEventListener('change', radioChange);
      if(radio.checked) radioChange({target:radio});
  });
});