const flame = document.querySelector('.flame');
const cake = document.querySelector('.cake');

cake.addEventListener('click', () => {
    flame.style.display = 'none';
    alert("Make a wish!");
});