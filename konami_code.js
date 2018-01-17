const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  let index = 0;
  e.addEventHandler('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('Hurray!');
      }
    } else {
      alert('That is not the correct code.');
    }
  });
}

main.addEventListener('click', function(event) {
  alert('I was clicked!')
})