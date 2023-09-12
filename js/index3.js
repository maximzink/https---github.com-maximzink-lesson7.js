
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function () {
    document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function () {
    document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseenter', function () {
    document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseleave', function () {
    document.body.style.backgroundColor = 'white';
});