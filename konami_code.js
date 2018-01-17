const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  let index = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      console.log (`${e.detail} ${e.which} ${e.location}`);
      if (index === code.length) {
        alert('Hurray!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}