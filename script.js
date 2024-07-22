$(document).ready(function () {
    $('#click-me').on('click', function () {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:8000/index.php",
            data: {
                q: '1'
            },
            success: function (response) {
                let div = document.createElement('div');
                div.innerHTML = response;
            }
        });
    });
});