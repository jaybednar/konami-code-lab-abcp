const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  const keyDown = document.querySelector('keydown')

keyDown.addEventListener('keydown', function(e) {
  console.log(e.which)
}){
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length - 1) {
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