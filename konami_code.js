const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  const keyDown = document.querySelector('keydown')
  keyDown.addEventListener('keydown', function(e) {
  console.log(e.which)
  });
}