var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    direction: 'top-bottom',
    opacity: [1, 1],
    states : {
        "default-state": {
            gradients: [
                ['#FFFFFF', '#E6E6FA'],
                ['#E6E6FA', '#FFFFFF']
            ],
            transitionSpeed: 10000
        }
    }
});
 
function ajustarCanvas() {
    var div = document.getElementById('wrap');
    var canvas = document.getElementById('granim-canvas');
    canvas.style.height = div.offsetHeight + 'px';
}

ajustarCanvas();
window.addEventListener('resize', ajustarCanvas);