
const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');

function updateWindowDimensions() {
    widthValue.textContent = `${window.innerWidth}px`;
    heightValue.textContent = `${window.innerHeight}px`;
}

updateWindowDimensions();

window.addEventListener('resize', updateWindowDimensions);