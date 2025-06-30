const inputCor = document.getElementById('cor');
 
  inputCor.addEventListener('input', function() {
    document.body.style.backgroundColor = inputCor.value;
  });