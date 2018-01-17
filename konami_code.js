const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  let i = 0;
  const body1 = document.querySelector('body')
  body1.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[i]) {
      i++;
      if (index === code.length) {
        alert('Hurray!');
      }
    } else {
      alert('That code is incorrect.');
    }
  });
}