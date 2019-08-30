
window.addEventListener('load', function() {

    document.querySelector('#enviar').addEventListener('click', function(e) {
        e.preventDefault();

        let name = document.querySelector('#nombre').value;
        let p = document.createElement('p');
        p.innerText = name;
        document.querySelector('section').appendChild(p);
    });

});