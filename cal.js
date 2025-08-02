
let expression = '';

    function appendValue(value) {
      expression += value;
      document.getElementById('screen').value = expression;
    }

    function clearScreen() {
      expression = '';
      document.getElementById('screen').value = '';
    }

    function calculate() {
      const operators = /[+\-*/]/;
      const tokens = expression.split(operators).map(Number);
      const operations = expression.split('').filter(char => operators.test(char));

      let result = tokens[0];
      for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
          case '+': result += tokens[i + 1]; break;
          case '-': result -= tokens[i + 1]; break;
          case '*': result *= tokens[i + 1]; break;
          case '/': result /= tokens[i + 1]; break;
        }
      }

      document.getElementById('screen').value = result;
      expression = result.toString();
    }