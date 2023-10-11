const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const play = document.getElementById('playButton');

canvas.width = 1024;
canvas.height = 574;

play.addEventListener("click", () => {
    document.getElementById('menu').style.display = "none";
    c.fillRect(0, 0, canvas.width, canvas.height); 
})