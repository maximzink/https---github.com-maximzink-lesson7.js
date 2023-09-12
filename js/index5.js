const button = document.getElementById('myButton');

button.addEventListener('click', function () {
    console.log('I was pressed!');
});

button.addEventListener('mouseenter', function () {
    console.log('Mouse on me!');
});

button.addEventListener('mouseleave', function () {
    console.log('Mouse is not on me!');
});