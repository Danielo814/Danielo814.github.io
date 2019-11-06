var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', sizeElement);
             
function sizeElement(){
  var textBox = this;
  setTimeout(function(){
    textBox.style.cssText = 'height:' + textBox.scrollHeight + 'px';
  },0);
}