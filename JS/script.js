var iconFlut = document.querySelector('#img-flut');
var textFlut = document.querySelector('.text-flut');

var iconFlut2 = document.querySelector('#img-flut-2');
var textFlut2 = document.querySelector('.text-flut-2');

iconFlut.addEventListener('mouseover', () => {
    textFlut.style.display = 'flex';  
});

iconFlut.addEventListener('mouseout', () => {
    textFlut.style.display = 'none';
});


iconFlut2.addEventListener('mouseover', () => {
    textFlut2.style.display = 'flex';
});

iconFlut2.addEventListener('mouseout', () => {
    textFlut2.style.display = 'none';
});

