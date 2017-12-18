var items = document.getElementsByClassName('accordeon__item');
var activeItem = document.getElementsByClassName('accordeon__item--active');

function toggleClass(elem) {
  elem.classList.toggle('accordeon__item--active');
}

for(var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
      var elem = e.currentTarget;

      if(activeItem.length > 0 && activeItem[0] !== elem) {
          activeItem[0].classList.remove('accordeon__item--active');
      }

      toggleClass(elem);

  })
}
