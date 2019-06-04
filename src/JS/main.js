var button = document.querySelector('#button');//С помощью команды можно обращаться к любому элементу - тегу, id, классу
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')
button.addEventListener('click', function() {
	modal.classList.add('modal_active');
});
close.addEventListener('click', function() {
	modal.classList.remove('modal_active');
});