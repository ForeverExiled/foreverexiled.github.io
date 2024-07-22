$(document).ready(function () {
    $('#click-me').on('click', function () {
        fetch('http://127.0.0.1:8000/index.php', {
            method: 'get',
            data: 'q=1'
        }).then(function (data) { 
            let div = document.createElement('div');
            div.innerHTML = data;
        });
    });
});