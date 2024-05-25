function appendToDisplay(value) {
   document.getElementById('res').value += value;
}

function clearDisplay() {
   document.getElementById('res').value = '';
}

function backspace() {
   var display = document.getElementById('res');
   display.value = display.value.slice(0, -1);
}

function calculate() {
   try {
      var display = document.getElementById('res');
      var expression = display.value.replace(/x/g, '*');
      var result = eval(expression);
      display.value = result;
   } catch (error) {
      display.value = 'Error';
   }
}
