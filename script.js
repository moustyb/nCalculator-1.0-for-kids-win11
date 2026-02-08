const display = document.getElementById('display');

/* Append characters to display */
function append(value) {
  if (value === '.') {
    const current = display.value;
    const lastNumber = current.split(/[\+\-\*\/\%]/).pop();
    if (lastNumber.includes('.')) return;
  }
  display.value += value;
}

/* Clear display */
function clearDisplay() {
  display.value = '';
}

/* Backspace */
function backspace() {
  display.value = display.value.slice(0, -1);
}

/* Calculate result */
function calculate() {
  try {
    let expression = display.value
      .replace(/÷/g, '/')
      .replace(/×/g, '*')
      .replace(/−/g, '-');

    if (expression.includes('%')) {
      expression = expression.replace(/(\d+(?:\.\d+)?)%/g, (_, num) => {
        return parseFloat(num) / 100;
      });
    }

    const result = eval(expression);
    display.value = parseFloat(result.toFixed(10)).toString();
  } catch {
    display.value = 'Error';
  }
}

/* Keyboard Support */
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/[0-9]/.test(key)) append(key);
  else if (key === '.') append('.');
  else if (key === '+' || key === '-') append(key);
  else if (key === '*') append('×');
  else if (key === '/') append('÷');
  else if (key === '%') append('%');
  else if (key === 'Enter' || key === '=') calculate();
  else if (key === 'Backspace') backspace();
  else if (key === 'Escape') clearDisplay();
});
