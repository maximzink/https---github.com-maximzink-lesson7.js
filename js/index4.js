
const select = document.getElementById('mySelect');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', function () {

    const selectedOption = select.options[select.selectedIndex];
    
    if (selectedOption) {
        select.removeChild(selectedOption);
    }
});