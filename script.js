let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch {
        document.querySelector('input').value = "Error";
        string = "";
      }
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'Back') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === '^2') {
      let valueToSquare = parseFloat(string);
      if (!isNaN(valueToSquare)) {
        string = (valueToSquare ** 2).toString();
        document.querySelector('input').value = string;
      }
    } else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
