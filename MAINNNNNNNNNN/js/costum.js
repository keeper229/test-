
$(function() {
    var link = $('.m-menu-link');
    var close = $('.close-menu');
    var menu = $('.m-menu');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active')
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active')
    });
});
kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let lastTime = Date.now();

function handle(e) {
  if (form.elements[e.type + 'Ignore'].checked) return;

  let text = e.type +
    ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftKey' : '') +
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.metaKey ? ' metaKey' : '') +
    (e.repeat ? ' (repeat)' : '') +
    "\n";

  if (area.value && Date.now() - lastTime > 250) {
    area.value += new Array(81).join('-') + '\n';
  }
  lastTime = Date.now();

  area.value += text;

  if (form.elements[e.type + 'Stop'].checked) {
    e.preventDefault();
  }
}
let log = document.getElementById('log');
document.onclick = inputChange;
function inputChange(e){
    log.textContent = `Значение: (${e.clientX}, ${e.clientY})`;
}